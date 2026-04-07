import React, { HTMLInputTypeAttribute } from 'react'

import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

interface InputProps {
    name: string
    label: string
    required?: boolean
    errors?: FieldError
    type?: HTMLInputTypeAttribute
    className?: string
}

const FormInputSwitch = React.forwardRef<
    HTMLInputElement,
    InputProps & ReturnType<UseFormRegister<FieldValues>>
>(({ name, label, errors }, ref) => (
    <>
        <label className="relative inline-flex cursor-pointer items-center">
            <input
                ref={ref}
                name={name}
                type="checkbox"
                className="peer sr-only"
            />
            <div className="peer-focus:outline-hidden peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
            <span className="text-secondary ms-3 text-sm font-medium">
                {label}
            </span>
        </label>
        {errors ? (
            <span className="text-sm text-red-500">{errors.message}</span>
        ) : null}
    </>
))

FormInputSwitch.displayName = 'FormInputSwitch'

export default FormInputSwitch
