import React from 'react'

import { NextPage } from 'next'
import CurrencyInput from 'react-currency-input-field'

import { cn } from '@/utils/cn'

interface Props {
    require?: boolean
    onChange: (_name: string, _data: any) => any
    value?: number | undefined
    placeholder?: string
    name: string
    label?: string
    inputClassName?: string
    labelClassName?: string
    outterClassName?: string
    disable?: boolean
    errors?: string | undefined
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

export const InputCurrency: NextPage<Props> = ({
    outterClassName,
    require,
    onChange,
    value = 0,
    name,
    label,
    inputClassName,
    labelClassName,
    placeholder,
    disable,
    errors,
    startIcon,
    endIcon,
}) => {
    return (
        <div className="box-border w-full">
            {label && (
                <div className={cn('mb-3', labelClassName)}>
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
            <div
                className={cn(
                    outterClassName,
                    'focus-within:outline-blue box-border flex items-center rounded-sm bg-white outline outline-1 outline-[rgba(196,196,196,0.8)] focus-within:outline-2'
                )}
            >
                <div className="focus-within:outline-blue box-border flex w-full items-center overflow-hidden rounded-sm outline outline-1 outline-[#e6e6e6] focus-within:outline-2">
                    {startIcon && (
                        <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                            {startIcon}
                        </div>
                    )}
                    <CurrencyInput
                        disabled={disable}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        className={cn(inputClassName, 'h-[38px] w-full px-2')}
                        defaultValue={0}
                        value={value || 0}
                        decimalsLimit={3}
                        onValueChange={(val, name) =>
                            onChange(name as string, val)
                        }
                    />
                    {endIcon && (
                        <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                            {endIcon}
                        </div>
                    )}
                </div>
            </div>
            {errors ? (
                <div className="text-sm text-red-500">{errors}</div>
            ) : null}
        </div>
    )
}
