import React, { useState, Children } from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    children: React.ReactNode
    afterIndex?: (_data: any) => void
    rightComponent?: React.ReactNode
    className?: string
}

export const TabMenu: NextPage<Props> = ({
    className,
    children,
    rightComponent,
    afterIndex,
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const handleChange = (index: number) => {
        setCurrentIndex(index)
        if (afterIndex) {
            afterIndex(index)
        }
    }

    const childs = Children.toArray(children).map((val, idx) => (
        <li
            className={`mr-5 grid cursor-pointer place-items-center border-b-4 ${
                currentIndex === idx ? 'border-primary' : 'border-transparent'
            }`}
            // This is Loop Child Element not need unique key for performance
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
        >
            <button className={''} onClick={() => handleChange(idx)}>
                {val}
            </button>
        </li>
    ))

    return (
        <div>
            <div
                className={cn(
                    'flex h-13.5 w-full items-center justify-between rounded-md bg-white px-5',
                    className
                )}
            >
                {/* List */}
                <ul className="flex h-full">{childs}</ul>

                {/* RightComponent */}
                <div>{rightComponent}</div>
            </div>
        </div>
    )
}

interface PropsMultiIndexTab {
    children: React.ReactNode
    stateNumber: number
}

export const WrapperIndexTab: NextPage<PropsMultiIndexTab> = ({
    children,
    stateNumber,
}) => {
    const childs = Children.toArray(children)
    if (childs.length > 0) return <div>{childs[stateNumber - 1]}</div>
    return null
}
