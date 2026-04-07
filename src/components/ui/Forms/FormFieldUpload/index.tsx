import React, { useState } from 'react'

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'

import ThumbImage from './thumb'

interface Props {
    files: any
    onChangFile: (_field: string, _event: any) => void
    name: string
    label?: string
    remark: string
    errors?: string
}

export const InputUpload: NextPage<Props> = ({
    onChangFile,
    name,
    files,
    label,
    remark,
    errors,
}) => {
    const [, setImage] = useState<any>(true)
    const handleFile = (event: any) => {
        if (!onChangFile) return
        onChangFile(name, event.currentTarget.files[0])
    }

    const handleCancel = () => {
        onChangFile(name, null)
        setImage(false)
    }

    return (
        <>
            <div className="relative flex size-full flex-col bg-transparent">
                {label && (
                    <div className="mb-3">
                        <p>{label}</p>
                    </div>
                )}
                <label
                    htmlFor={name}
                    className="z-0 h-full cursor-auto rounded-md border border-dashed"
                >
                    {typeof files?.name == 'string' ? (
                        <ThumbImage file={files} />
                    ) : (
                        files && (
                            <img
                                src={files}
                                style={{ width: 'auto', height: '100%' }}
                                alt={name}
                            />
                        )
                    )}
                </label>
                <button
                    className="z-9999 bg-primary/20 absolute -right-5 top-0 flex cursor-pointer items-center rounded-full p-1"
                    onClick={handleCancel}
                >
                    <FontAwesomeIcon icon={faClose} className="size-8" />
                </button>
                <input
                    id={name}
                    name={name}
                    type="file"
                    onChange={handleFile}
                    hidden
                />
                <p className="text-sm text-red-500">{remark}</p>
                {errors ? (
                    <div className="text-sm text-red-500">{errors}</div>
                ) : null}
            </div>
        </>
    )
}
