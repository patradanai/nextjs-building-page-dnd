import { useRouter } from 'next/navigation'

import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createColumnHelper } from '@tanstack/react-table'
import dayjs from 'dayjs'

import Section from '@/components/ui/Container/Section'
import { IndeterminateCheckbox, Table } from '@/components/ui/Table'

interface Props<T extends object> {
    datas?: T[]
    totalRecord?: number
    onChangedSelection?: (datas: any) => void
    onChangedPaignation?: (pageIndex: number, pageSize: number) => void
}

const TableResource = <T extends object>({
    datas = [],
    onChangedPaignation,
    onChangedSelection,
    totalRecord,
}: Props<T>) => {
    const router = useRouter()
    const columnHelper = createColumnHelper<any>()
    const columns = [
        columnHelper.accessor('select', {
            header: ({ table }) => (
                <div className="grid place-items-center px-2">
                    <IndeterminateCheckbox
                        {...{
                            checked: table.getIsAllRowsSelected(),
                            indeterminate: table.getIsSomeRowsSelected(),
                            onChange: table.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                </div>
            ),
            size: 5,
            cell: ({ row }) => (
                <div className="grid place-items-center px-2">
                    <IndeterminateCheckbox
                        {...{
                            checked: row.getIsSelected(),
                            disabled: !row.getCanSelect(),
                            indeterminate: row.getIsSomeSelected(),
                            onChange: row.getToggleSelectedHandler(),
                        }}
                    />
                </div>
            ),
        }),
        columnHelper.accessor('id', {
            header: () => 'เลขอ้างอิง',
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
            size: 10,
        }),
        columnHelper.accessor('domain', {
            header: () => 'ชื่อโดเมน',
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('github', {
            header: () => 'Github',
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('title', {
            header: () => 'title',
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('description', {
            header: () => 'description',
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('status', {
            header: () => 'สถาณะ',
            cell: (info) => {
                return (
                    <div className="rounded-full bg-green-500 text-center text-sm font-bold">
                        {info.renderValue()}
                    </div>
                )
            },
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('published_at', {
            header: () => 'วันที่สร้าง',
            cell: (info) => {
                return dayjs(info.renderValue()).format('YYYY-MM-DD')
            },
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('action', {
            header: () => 'Action',
            cell: (info) => (
                <div className="flex cursor-pointer space-x-5">
                    <FontAwesomeIcon
                        icon={faEdit}
                        className="h-4 w-4"
                        onClick={() => {
                            router.push(`/resource/${info.row.original.id}`)
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="h-4 w-4"
                        onClick={async () => {}}
                    />
                </div>
            ),
            footer: (info) => info.column.id,
        }),
    ]

    return (
        <Section>
            <Table
                data={datas}
                columns={columns}
                totalRecords={totalRecord}
                onChangedSelection={onChangedSelection}
                onPaginationChange={onChangedPaignation}
            />
        </Section>
    )
}
export default TableResource
