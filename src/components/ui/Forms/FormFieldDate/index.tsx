import React, { useState } from 'react'

import dayjs from 'dayjs'
import { NextPage } from 'next'
import DatePicker from 'react-datepicker'

import { cn } from '@/utils/cn'

type FormatDate = 'DD-MMMM-YYYY' | 'HH:mm:ss' | 'DD-MMMM-YYYY HH:mm:ss'
interface Props {
    containerClassName?: string
    containerLabel?: string
    datepickerClassName?: string
    onChangeDate: (_type: string, _date: Date) => void
    label?: string
    name: string
    require?: boolean
    showTime?: boolean
    value?: string
    error?: any
    disable?: boolean
    formatDate?: FormatDate
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

export const InputDate: NextPage<Props> = ({
    onChangeDate,
    containerClassName,
    datepickerClassName,
    containerLabel,
    label,
    require,
    name,
    value,
    error,
    disable,
    formatDate = 'DD-MMMM-YYYY',
    startIcon,
    endIcon,
}) => {
    const [dateState, setDateState] = useState<Date>(new Date())

    const handleDate = (date: Date) => {
        setDateState(date)
        onChangeDate(name, date)
    }

    return (
        <div className={cn(containerClassName)}>
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
            <div className="bg-gray/20 flex w-full justify-center">
                <div className="focus-within:outline-blue box-border flex w-full items-center overflow-hidden rounded-sm outline outline-1 outline-[#e6e6e6] focus-within:outline-2">
                    {startIcon && (
                        <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                            {startIcon}
                        </div>
                    )}
                    <DatePicker
                        portalId="root-portal"
                        wrapperClassName="w-full bg-white"
                        className={cn(
                            'outline-hidden h-[38px] w-full appearance-none rounded-sm bg-transparent bg-white px-5 text-center placeholder-[#9c9b9b] placeholder:text-sm',
                            datepickerClassName
                        )}
                        popperClassName="z-999"
                        selected={dateState}
                        onChange={handleDate}
                        value={
                            dayjs(value).isValid()
                                ? dayjs(value).format(formatDate)
                                : ''
                        }
                        disabled={disable}
                        dateFormat={formatDate}
                    />
                    {endIcon && (
                        <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                            {endIcon}
                        </div>
                    )}
                </div>
            </div>
            {error && (
                <div>
                    <p className="text-red text-sm">{error}</p>
                </div>
            )}
        </div>
    )
}
