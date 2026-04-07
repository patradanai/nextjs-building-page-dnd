'use client'
import React, { useState } from 'react'

import Container from '@/components/ui/Container/Container'
import { useResources } from '@/hooks/useResource'
import { IPaginationDetail } from '@/types/pagination'
import { mappingFilters } from '@/utils/mapping/mappingFilter'

import TableResource from './components/TableResouce'
import TableResourceFilter, {
    IResourceFilter,
} from './components/TableResourceFilter'

const ListResouceModule = () => {
    const [paignation, setPaignation] = useState({
        pageIndex: 1,
        pageSize: 20,
    })
    const [fillers, setFillters] = useState<IPaginationDetail[]>([])

    const { data } = useResources({
        criterias: [...fillers],
        limit: paignation.pageSize,
        offset: paignation.pageIndex,
    })

    const handleChangedPaignation = (pageIndex: number, pageSize: number) => {
        setPaignation(() => ({
            pageIndex: pageIndex,
            pageSize: pageSize,
        }))
    }

    const handleOnChangeFilter = (val: IResourceFilter) => {
        if (!val) return
        setFillters(mappingFilters(val))
    }

    return (
        <Container className="py-10">
            {/* Filter */}
            <TableResourceFilter handleOnChange={handleOnChangeFilter} />

            {/* Table */}
            <TableResource
                datas={data?.rows}
                onChangedPaignation={handleChangedPaignation}
                totalRecord={data?.total_count}
            />
        </Container>
    )
}

export default ListResouceModule
