/* eslint-disable react/no-array-index-key */
import React, { Children, cloneElement } from 'react'

import { NextPage } from 'next'

interface IBreadCrumbStyle {
    children: React.ReactNode
}

const Crumb = ({ children, _last = false }: any) => {
    return <li className="text-sm text-[#74788d]">{children}</li>
}

const BreadCrumbStyle: NextPage<IBreadCrumbStyle> = ({ children }) => {
    const arrayChildren = Children.toArray(children)
    const childs = arrayChildren.flatMap((child, index) => {
        const lastindex = index === arrayChildren.length - 1

        if (lastindex) {
            return [
                <Crumb key={index} last>
                    {cloneElement(child as React.ReactElement<any>)}
                </Crumb>,
            ]
        }

        return [
            <Crumb key={index}>
                {cloneElement(child as React.ReactElement<any>)}
            </Crumb>,
            <Crumb key={index + 100}>
                <p className="px-4 text-[#908a8a]">&#62;</p>
            </Crumb>,
        ]
    })

    return <>{childs}</>
}

export default BreadCrumbStyle
