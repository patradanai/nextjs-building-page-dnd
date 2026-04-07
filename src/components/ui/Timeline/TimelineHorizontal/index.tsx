import React, { Children, isValidElement } from 'react'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'

const CHECKED_COLOR = 'bg-green-500'
const UNCHECKED_COLOR = 'bg-gray-300'

interface PropsTimelineHorizontal {
    isChecked?: boolean
    children?: React.ReactNode
}

export const TimelineHorizontal: NextPage<PropsTimelineHorizontal> = (
    props
) => {
    const { isChecked, children } = props

    return (
        <div className="w-full grid-rows-12 text-gray-50 md:grid">
            <div className="flex flex-col md:contents">
                <div className="relative row-start-2 row-end-4 mr-10 w-full md:mx-auto">
                    <div className="flex h-1 w-full items-center justify-center">
                        <div
                            className={`pointer-events-none size-full ${
                                isChecked ? CHECKED_COLOR : UNCHECKED_COLOR
                            }`}
                        />
                    </div>

                    {/* Icon */}
                    <div
                        className={`absolute left-1/2 top-1/2 -mt-3 grid size-6 -translate-x-1/2 place-items-center rounded-full ${
                            isChecked ? CHECKED_COLOR : UNCHECKED_COLOR
                        } text-center shadow`}
                    >
                        <FontAwesomeIcon icon={faCheck} className="size-4" />
                    </div>
                </div>
                <div
                    className={
                        'row-start-4 row-end-12 my-4 mr-auto w-full px-4'
                    }
                >
                    <div
                        className={`rounded-xl p-4 shadow-md ${
                            isChecked ? CHECKED_COLOR : UNCHECKED_COLOR
                        } text-white`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface PropsWrapperTimelineHorizontal {
    children?: React.ReactNode
    stateNumber?: number
}

export const WrapperTimelineHorizontal: NextPage<
    PropsWrapperTimelineHorizontal
> = ({ children, stateNumber = 0 }) => {
    return (
        <div className="flex w-full">
            {Children.map(children, (child, index) => {
                if (isValidElement(child)) {
                    return React.cloneElement(child, {
                        ...child.props,
                        isChecked: index < stateNumber ? true : false,
                    })
                }

                return child
            })}
        </div>
    )
}
