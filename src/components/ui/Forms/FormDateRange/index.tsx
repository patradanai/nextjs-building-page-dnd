import React, { useState } from 'react'

import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { NextPage } from 'next'
import DatePicker from 'react-datepicker'

import { cn } from '@/utils/cn'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Bangkok')

interface Props {
    containerClassName?: string
    containerLabel?: string
    datepickerClassName?: string
    onChangeDate: (_type: string, _date: [start: Date, end: Date]) => void
    label?: string
    name: string
    require?: boolean
    showTime?: boolean
    value?: string
    error?: any
    disable?: boolean
}

export const InputDateRange: NextPage<Props> = ({
    onChangeDate,
    containerClassName,
    datepickerClassName,
    containerLabel,
    label,
    require,
    name,
    showTime,
    value,
    error,
    disable,
}) => {
    const [startDate, setStartDate] = useState<Date>(
        dayjs().startOf('month').toDate()
    )
    const [endDate, setEndDate] = useState<Date>(
        dayjs().endOf('month').toDate()
    )

    const handleDate = (dates: any) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        onChangeDate('startDate', start)
        onChangeDate('endDate', end)
    }

    return (
        <div className={cn(containerClassName)}>
            {label && (
                <div className={cn('mb-3', containerLabel)}>
                    <label
                        className={`text-sm ${
                            require
                                ? 'after:text-[#FF0000] after:content-["*"]'
                                : ''
                        }`}
                        htmlFor={name}
                    >
                        {label}
                    </label>
                </div>
            )}
            <div className="focus-within:outline-blue box-border flex w-full items-center overflow-hidden rounded-sm outline outline-1 outline-[#e6e6e6] focus-within:outline-2">
                <DatePicker
                    selectsRange
                    portalId="root-portal"
                    wrapperClassName="w-full bg-white"
                    className={cn(
                        'outline-hidden h-[38px] w-full appearance-none rounded-sm bg-transparent bg-white px-5 text-center text-sm placeholder-[#9c9b9b] placeholder:text-sm',
                        datepickerClassName
                    )}
                    timeFormat="HH:mm"
                    dateFormat={
                        showTime ? 'dd/mm/yyyy HH:mm:ss' : 'dd/MMM/yyyy'
                    }
                    popperClassName="z-999"
                    selected={startDate}
                    onChange={handleDate}
                    value={value}
                    showTimeSelect={showTime}
                    disabled={disable}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            {error && (
                <div>
                    <p className="text-red text-sm">{error}</p>
                </div>
            )}
        </div>
    )
}
