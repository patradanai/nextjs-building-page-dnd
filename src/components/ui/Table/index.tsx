'use client'

import React, { HTMLProps, useEffect } from 'react'

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
    PaginationState,
    VisibilityState,
} from '@tanstack/react-table'
import Skeleton from 'react-loading-skeleton'

interface PropsTable<T extends object> {
    data?: T[]
    totalRecords?: number
    columns: ColumnDef<T, any>[]
    onChangedSelection?: (onChangedSelection: any) => void
    onPaginationChange?: (pageIndex: number, pageSize: number) => void
    isPagination?: boolean
    sizeTable?: number
    isLoading?: boolean
    overrideVisibleColumns?: Record<string, boolean>
}

const Table = <T extends object>({
    data = [],
    columns,
    onPaginationChange,
    onChangedSelection,
    isPagination = true,
    totalRecords = 0,
    sizeTable = 10,
    isLoading = false,
    overrideVisibleColumns,
}: PropsTable<T>) => {
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [{ pageIndex, pageSize }, setPagination] =
        React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: sizeTable,
        })

    const pagination = React.useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    )

    const table = useReactTable({
        data: data ?? [],
        columns,
        pageCount: totalRecords,
        state: {
            pagination,
            rowSelection,
            columnVisibility: {
                ...columnVisibility,
                ...overrideVisibleColumns,
            },
        },
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableRowSelection: true, //enable row selection for all rows
        // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
        onPaginationChange: setPagination,
        onRowSelectionChange: setRowSelection,
        onColumnVisibilityChange: setColumnVisibility,
        manualPagination: true,
        debugTable: false,
    })

    useEffect(() => {
        onChangedSelection?.(rowSelection)
    }, [rowSelection])

    useEffect(() => {
        onPaginationChange?.(pageIndex, pageSize)
    }, [pagination])

    return (
        <div className="cls-table">
            <table className="w-full table-auto border-separate">
                <thead className="h-10 border-b border-b-[#9c9b9b] bg-[#ebeaea]/80">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th
                                        key={header.id}
                                        {...{
                                            colSpan: header.colSpan,
                                            style: {
                                                width: header.getSize(),
                                            },
                                        }}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div className="text-sm font-normal text-gray-500">
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {/* {header.column.getCanFilter() ? (
                                                    <div>
                                                        <Filter
                                                            column={
                                                                header.column
                                                            }
                                                            table={table}
                                                        />
                                                    </div>
                                                ) : null} */}
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody className="">
                    {!isLoading
                        ? data?.length
                            ? table.getRowModel().rows.map((row) => {
                                  return (
                                      <tr key={row.id}>
                                          {row.getVisibleCells().map((cell) => {
                                              return (
                                                  <td
                                                      key={cell.id}
                                                      {...{
                                                          style: {
                                                              width: cell.column.getSize(),
                                                          },
                                                      }}
                                                  >
                                                      {flexRender(
                                                          cell.column.columnDef
                                                              .cell,
                                                          cell.getContext()
                                                      )}
                                                  </td>
                                              )
                                          })}
                                      </tr>
                                  )
                              })
                            : null
                        : new Array(5).fill(null).map(() => {
                              return table
                                  .getHeaderGroups()
                                  .map((headerGroup) => {
                                      return (
                                          <tr key={headerGroup.id}>
                                              {headerGroup.headers.map(
                                                  (header) => (
                                                      <td key={header.id}>
                                                          <Skeleton
                                                              className="z-0"
                                                              height={30}
                                                          />
                                                      </td>
                                                  )
                                              )}
                                          </tr>
                                      )
                                  })
                          })}
                </tbody>
            </table>

            {data?.length === 0 ? (
                <div className="mt-5 flex justify-center text-black">
                    No Records
                </div>
            ) : null}
            {/* Pagination */}
            {isPagination && (
                <>
                    <div className="h-2" />
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center justify-center">
                            <span className="flex items-center gap-1 px-2">
                                <div>Page</div>
                                <strong>
                                    {table.getState().pagination.pageIndex + 1}{' '}
                                    of {table.getPageCount()}
                                </strong>
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <button
                                className="grid size-10 place-items-center rounded-lg border border-gray-300 bg-[#f0f3ff] text-[#364AD9] opacity-80"
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {'<<'}
                            </button>
                            <button
                                className="grid size-10 place-items-center rounded-lg border border-gray-300 bg-[#f0f3ff] text-[#364AD9] opacity-80"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {'<'}
                            </button>
                            <button
                                className="grid size-10 place-items-center rounded-lg border border-gray-300 bg-[#f0f3ff] text-[#364AD9] opacity-80"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                {'>'}
                            </button>
                            <button
                                className="grid size-10 place-items-center rounded-lg border border-gray-300 bg-[#f0f3ff] text-[#364AD9] opacity-80"
                                onClick={() =>
                                    table.setPageIndex(table.getPageCount() - 1)
                                }
                                disabled={!table.getCanNextPage()}
                            >
                                {'>>'}
                            </button>

                            <select
                                className="block w-24 rounded-lg border border-gray-300 bg-[#f0f3ff] p-2 text-sm text-[#364AD9] outline outline-transparent focus:border-blue-500 focus:ring-blue-500"
                                value={table.getState().pagination.pageSize}
                                onChange={(e) => {
                                    table.setPageSize(Number(e.target.value))
                                }}
                            >
                                {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </>
            )}

            <style jsx>
                {`
                    .cls-table {
                        font-family: 'Kanit';
                        font-weight: 400;
                    }
                    table {
                        /* outline: 1px solid gray; */
                        border-spacing: 0;
                    }

                    /* border radius */
                    tr th:nth-child(1) {
                        border-radius: 10px 0 0 0;
                    }

                    tr th:nth-last-child(1) {
                        border-radius: 0 10px 0 0;
                    }

                    /* tr:nth-last-child(1) td:nth-child(1) {
                    border-radius: 0 0 0 10px;
                } */

                    /* tr:nth-last-child(1) td:nth-last-child(1) {
                    border-radius: 0 0 10px 0;
                } */
                    tr {
                        text-align: left;
                    }

                    tr th {
                        padding: 0px 10px;
                    }

                    tr td {
                        height: 3rem;
                        padding: 0px 10px;
                        background-color: #fff;
                        font-weight: 400;
                        font-size: 0.875rem;
                    }
                `}
            </style>
        </div>
    )
}

const IndeterminateCheckbox = ({
    indeterminate,
    className = 'text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4 rounded-sm focus:ring-2',
    ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
    const ref = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            if (!ref.current) return
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])

    return (
        <input
            type="checkbox"
            ref={ref}
            className={className + ' cursor-pointer'}
            {...rest}
        />
    )
}

export { Table, IndeterminateCheckbox }

// function Filter({
//   column,
//   table,
// }: {
//   column: Column<any, any>
//   table: ReactTable<any>
// }) {
//   const firstValue = table
//     .getPreFilteredRowModel()
//     .flatRows[0]?.getValue(column.id)

//   const columnFilterValue = column.getFilterValue()

//   return typeof firstValue === 'number' ? (
//     <div className="flex space-x-2">
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[0] ?? ''}
//         onChange={e =>
//           column.setFilterValue((old: [number, number]) => [
//             e.target.value,
//             old?.[1],
//           ])
//         }
//         placeholder={`Min`}
//         className="w-24 border shadow-sm rounded-sm"
//       />
//       <input
//         type="number"
//         value={(columnFilterValue as [number, number])?.[1] ?? ''}
//         onChange={e =>
//           column.setFilterValue((old: [number, number]) => [
//             old?.[0],
//             e.target.value,
//           ])
//         }
//         placeholder={`Max`}
//         className="w-24 border shadow-sm rounded-sm"
//       />
//     </div>
//   ) : (
//     <input
//       type="text"
//       value={(columnFilterValue ?? '') as string}
//       onChange={e => column.setFilterValue(e.target.value)}
//       placeholder={`Search...`}
//       className="w-36 border shadow-sm rounded-sm"
//     />
//   )
// }
