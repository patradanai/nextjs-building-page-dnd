import React, { useState, useEffect, Children } from 'react'

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
    const [childs, setChilds] =
        useState<(React.ReactElement<any> | number | string)[]>()
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const handleChange = (index: number) => {
        setCurrentIndex(index)
        afterIndex && afterIndex(index)
    }

    useEffect(() => {
        const arrayChild = Children.toArray(children)
        const childElement: (React.ReactElement<any> | number | string)[] = []

        Children.map(arrayChild, (val, idx) => {
            childElement.push(
                <li
                    className={`mr-5 grid cursor-pointer place-items-center border-b-4 ${
                        currentIndex === idx
                            ? 'border-primary'
                            : 'border-transparent'
                    }`}
                    // This is Loop Child Element not need unique key for performance
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                >
                    <button className={''} onClick={() => handleChange(idx)}>
                        {val}
                    </button>
                </li>
            )
        })

        setChilds(childElement)
    }, [children, currentIndex])
    return (
        <div>
            <div
                className={cn(
                    'flex h-[54px] w-full items-center justify-between rounded-md bg-white px-5',
                    className
                )}
            >
                {/* List */}
                <ul className="flex h-full">{childs?.map((val) => val)}</ul>

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
