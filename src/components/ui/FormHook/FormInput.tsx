import React, { HTMLInputTypeAttribute } from 'react'

import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

import { cn } from '@/utils/cn'

interface InputProps {
    name: string
    label: string
    required?: boolean
    errors?: FieldError
    type?: HTMLInputTypeAttribute
    disabled?: boolean
    className?: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

const FormInput = React.forwardRef<
    HTMLInputElement,
    InputProps & ReturnType<UseFormRegister<FieldValues>>
>(
    (
        {
            onChange,
            onBlur,
            name,
            label,
            errors,
            type = 'text',
            disabled = false,
            className,
            startIcon,
            endIcon,
            required,
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
            <div className="focus-within:outline-blue box-border flex w-full items-center overflow-hidden rounded-sm outline outline-[#E6E6E6FF] focus-within:outline-2">
                {startIcon && (
                    <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                        {startIcon}
                    </div>
                )}
                <input
                    type={type}
                    name={name as string}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={cn(
                        'outline-hidden h-[38px] w-full appearance-none rounded-sm bg-white px-4 placeholder-[#9c9b9b] placeholder:text-sm',
                        {
                            'bg-[#413F3FFF] bg-opacity-10 text-[#999999]':
                                disabled,
                        },
                        className // Spread className at the end to allow overrides
                    )}
                />
                {endIcon && (
                    <div className="grid h-[38px] w-[45px] place-items-center bg-[#f2f2f2]">
                        {endIcon}
                    </div>
                )}
            </div>
            {errors ? (
                <span className="text-sm text-red-500">{errors.message}</span>
            ) : null}
        </>
    )
)

FormInput.displayName = 'FormInput'

export default FormInput
