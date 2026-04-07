import React, { HTMLInputTypeAttribute } from 'react'

import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

import { cn } from '@/utils/cn'

interface InputTextAreaProps {
    name: string
    label: string
    required?: boolean
    errors?: FieldError
    type?: HTMLInputTypeAttribute
    disabled?: boolean
    className?: string
    placeholder?: string
}

const FormInputArea = React.forwardRef<
    HTMLTextAreaElement,
    InputTextAreaProps & ReturnType<UseFormRegister<FieldValues>>
>(
    (
        {
            name,
            label,
            errors,
            disabled = false,
            className,
            required,
            placeholder,
        },
        ref
    ) => (
        <>
            <label
                className={`text-sm ${
                    required ? 'after:text-[#FF0000] after:content-["*"]' : ''
                }`}
                htmlFor={name}
            >
                {label}
            </label>
            <div className="focus-within:outline-blue box-border flex w-full items-center overflow-hidden rounded-sm outline-1 outline-[#E6E6E6FF] focus-within:outline-2">
                <textarea
                    disabled={disabled}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    ref={ref}
                    className={cn(
                        {
                            'bg-[#9c9b9b] bg-opacity-10 text-[#999999]':
                                disabled,
                        },
                        cn(
                            'outline-hidden h-full min-h-[100px] w-full appearance-none rounded-sm border border-[#e6e6e6] bg-white p-5 placeholder-[#9c9b9b] placeholder:text-sm',
                            className
                        )
                    )}
                />
            </div>
            {errors ? (
                <span className="text-sm text-red-500">{errors.message}</span>
            ) : null}
        </>
    )
)

FormInputArea.displayName = 'FormInputArea'

export default FormInputArea
