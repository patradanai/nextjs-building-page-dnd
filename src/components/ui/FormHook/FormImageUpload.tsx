import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import { faCancel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Control,
    FieldValues,
    Path,
    PathValue,
    useController,
} from 'react-hook-form'

interface FormImageUploadProps<TFieldValues extends FieldValues> {
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    label?: string
    accept?: string
    maxSize?: number // in MB
    className?: string
    defaultImage?: string
    disabled?: boolean
}

export const FormImageUpload = <TFieldValues extends FieldValues>({
    name,
    control,
    label = 'Upload Image',
    accept = 'image/*',
    maxSize = 5, // 5MB default
    className = '',
    defaultImage,
    disabled = false,
}: FormImageUploadProps<TFieldValues>) => {
    const {
        field: { onChange, value },
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue: '' as PathValue<TFieldValues, Path<TFieldValues>>,
    })

    const [preview, setPreview] = useState<string | null>(() => {
        if (typeof value === 'string' && value) return value
        if (defaultImage && !value) return defaultImage
        return null
    })
    const [isDragging, setIsDragging] = useState(false)

    // Set preview when value changes or component mounts
    useEffect(() => {
        if (value && typeof value === 'object') {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(value)
        }
    }, [value])

    const displayPreview =
        typeof value === 'string' && value
            ? value
            : !value && defaultImage
              ? defaultImage
              : preview

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        handleFile(file)
    }

    const handleFile = (file?: File) => {
        if (!file) return

        // Validate file size
        if (file.size > maxSize * 1024 * 1024) {
            alert(`File size must be less than ${maxSize}MB`)
            return
        }

        onChange(file)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (!disabled) {
            setIsDragging(true)
        }
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDragging(false)

        if (disabled) return

        const file = e.dataTransfer.files?.[0]
        handleFile(file)
    }

    const removeImage = () => {
        onChange('')
        setPreview(null)
    }

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div
                className={`relative rounded-lg border-2 border-dashed bg-white p-4 transition-colors ${
                    isDragging
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300'
                } ${error ? 'border-red-500' : ''} ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    id={name}
                    accept={accept}
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={disabled}
                />

                {displayPreview ? (
                    <div className="relative">
                        <div className="relative h-64 w-full overflow-hidden rounded-md">
                            <Image
                                src={displayPreview}
                                alt="Preview"
                                fill
                                className="object-contain"
                            />
                        </div>
                        {!disabled && (
                            <button
                                type="button"
                                onClick={removeImage}
                                className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white transition-colors hover:bg-red-600"
                            >
                                <FontAwesomeIcon
                                    icon={faCancel}
                                    className="size-5"
                                />
                            </button>
                        )}
                    </div>
                ) : (
                    <label
                        htmlFor={name}
                        className="flex h-64 cursor-pointer flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                                className="mb-3 h-10 w-10 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">
                                    Click to upload
                                </span>{' '}
                                or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                                Supported formats: JPG, PNG, GIF (Max: {maxSize}
                                MB)
                            </p>
                        </div>
                    </label>
                )}
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
        </div>
    )
}

export default FormImageUpload
