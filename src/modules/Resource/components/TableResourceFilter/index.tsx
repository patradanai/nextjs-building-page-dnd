import { useState, useCallback, useEffect } from 'react'

import _ from 'lodash'
import { NextPage } from 'next'

import Section from '@/components/ui/Container/Section'
import { InputDateRange } from '@/components/ui/Forms/FormDateRange'
import { InputField } from '@/components/ui/Forms/FormFieldInput'
import { InputSelection } from '@/components/ui/Forms/FormFieldSelection'

export interface IResourceFilter {
    q?: string
}

interface Props {
    handleOnChange: (filter: IResourceFilter) => void
}

const TableResourceFilter: NextPage<Props> = ({ handleOnChange }) => {
    const [filterState, setFilterState] = useState<IResourceFilter>()

    const debounceFilters = useCallback(
        _.debounce((filter) => {
            if (handleOnChange) {
                handleOnChange(filter)
            }
        }, 1000),
        [filterState]
    )

    const handleChangeFilters = (
        type: string,
        value: string | number | Date | [start: Date, end: Date]
    ) => {
        setFilterState((val: any) => ({
            ...val,
            [type as keyof typeof val]: value,
        }))
    }

    useEffect(() => {
        debounceFilters(filterState)
        return () => debounceFilters.cancel()
    }, [filterState])

    return (
        <Section className="mb-10">
            <div className="mb-5 grid grid-cols-4 gap-5">
                <InputField
                    name="name"
                    placeholder="ค้นหาชื่อสินค้า"
                    handleOnChange={(data) =>
                        handleChangeFilters('name', data.target.value)
                    }
                />
                <InputSelection
                    name="is_active"
                    handleSelection={(type, data) =>
                        handleChangeFilters(type, data.value)
                    }
                    itemOptions={[
                        { label: 'เปิดใช้งาน', value: 'true' },
                        { label: 'ปิดใช้งาน', value: 'false' },
                    ]}
                />
                <div className="col-span-2">
                    <InputDateRange
                        name="date"
                        onChangeDate={handleChangeFilters}
                    />
                </div>
            </div>
        </Section>
    )
}

export default TableResourceFilter
