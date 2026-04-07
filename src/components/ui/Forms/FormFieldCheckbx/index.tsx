import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    handleOnChange: (_event: any) => void
    checked?: boolean
    name: string
    label: string
    placeholder?: string
    containerClassName?: string
    inputClassName?: string
    labelClassName?: string
}

export const InputCheckbox: NextPage<Props> = ({
    handleOnChange,
    checked,
    name,
    label,
    placeholder,
    containerClassName,
    labelClassName,
    inputClassName,
}) => {
    return (
        <div className={cn(containerClassName, '')}>
            <div>
                <label className="flex cursor-pointer items-center leading-7 text-[#5D5D5D]">
                    <input
                        className={cn(
                            inputClassName,
                            'mr-2 scale-[1.3] border-gray-400 md:scale-[1.5]'
                        )}
                        onChange={handleOnChange}
                        placeholder={placeholder}
                        type="checkbox"
                        checked={checked}
                        name={name}
                        id={name}
                    />
                    <span className={cn(labelClassName, 'ml-2')}>
                        {label || ''}
                    </span>
                </label>
            </div>
        </div>
    )
}
