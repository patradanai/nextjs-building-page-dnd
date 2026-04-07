/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, Children, cloneElement } from 'react'

import { NextPage } from 'next'

interface IBreadCrumbStyle {
    children: React.ReactNode
}

const Crumb = ({ children, _last = false }: any) => {
    return <li className="text-sm text-[#74788d]">{children}</li>
}

const BreadCrumbStyle: NextPage<IBreadCrumbStyle> = ({ children }) => {
    const [childs, setChilds] = useState<any>(null)

    useEffect(() => {
        const arrayChildren = Children.toArray(children)
        const childElements: any[] = []
        Children.map(arrayChildren, (child, index) => {
            const lastindex = index === arrayChildren.length - 1
            if (lastindex) {
                childElements.push(
                    <Crumb key={index} last>
                        {cloneElement(child as React.ReactElement<any>)}
                    </Crumb>
                )
            } else {
                childElements.push(
                    <Crumb key={index}>
                        {cloneElement(child as React.ReactElement<any>)}
                    </Crumb>
                )
                !lastindex &&
                    childElements.push(
                        <Crumb key={index + 100}>
                            <p className="px-4 text-[#908a8a]">&#62;</p>
                        </Crumb>
                    )
            }
        })

        setChilds(childElements)
    }, [children])

    if (!childs) return null

    return <>{childs.map((val: string) => val)}</>
}

export default BreadCrumbStyle
