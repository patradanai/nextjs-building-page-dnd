import React from 'react'

import { NextPage } from 'next'
import Select, { CSSObjectWithLabel, StylesConfig } from 'react-select'

import { cn } from '@/utils/cn'

interface Props {
    className?: string
    handleSelection?: (_name: string, _data: any) => void
    itemOptions: { label: string; value: any }[] | undefined
    stylesCustom?: CSSObjectWithLabel
    label?: string
    placeholder?: string
    required?: boolean
    name: string
    disable?: boolean
    value?: any
    error?: any
}

export const InputSelection: NextPage<Props> = ({
    name,
    value,
    label,
    required,
    className,
    handleSelection,
    itemOptions = [{ label: '', value: '' }],
    stylesCustom,
    placeholder,
    disable,
    error,
}) => {
    const pretyStylesPagination: StylesConfig = {
        control: (styles) => ({ ...styles, ...stylesCustom }),
        option: (styles) => ({ ...styles }),
        menuPortal: (styles) => ({ ...styles, zIndex: 9999, color: '#161616' }),
        indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
        valueContainer: (styles) => ({
            ...styles,
            textAlign: 'left',
            paddingLeft: 15,
        }),
        placeholder: (styles) => ({
            ...styles,
            fontSize: 14,
            color: '#9c9b9b',
        }),
    }
    return (
        <div className={cn(className)}>
            {label && (
                <div className="mb-4 flex flex-col justify-center">
                    <label
                        className={`text-sm ${
                            required
                                ? 'after:text-[#FF0000] after:content-["*"]'
                                : ''
                        }`}
                        htmlFor={name}
                    >
                        {label}
                    </label>
                </div>
            )}
            <Select
                isDisabled={disable}
                name={name}
                instanceId="select-pagination"
                menuPortalTarget={
                    typeof window !== 'undefined' ? document.body : null
                }
                styles={pretyStylesPagination}
                onChange={(val: any) => handleSelection?.(name, val)}
                options={itemOptions}
                value={value}
                placeholder={placeholder}
            />
            {error && (
                <div>
                    <p className="text-sm text-red-500">{error}</p>
                </div>
            )}
        </div>
    )
}
