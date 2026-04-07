'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NextPage } from 'next'

import breadcrumbConstant from '@/constants/breadcrumb.json'

import BreadCrumbStyle from './BreadcrumbStyle'

type BreadCrumbChild = {
    id: string
    breadCrumb: string
    to: string
}

interface Props {
    className?: string
}

export const BreadCrumb: NextPage<Props> = ({ className }) => {
    const [breadcrumb, setBreadcrumb] = useState<BreadCrumbChild[]>([])
    const router = usePathname()

    useEffect(() => {
        const routers = router.split('/')
        routers.shift() // delete first array

        const pathArray: Array<BreadCrumbChild> = routers.map((path, idx) => {
            return {
                id: Date.now().toString(),
                breadCrumb: path,
                to: `/${routers.slice(0, idx + 1).join('/')}`,
            }
        })

        setBreadcrumb(pathArray)
    }, [router])

    if (breadcrumb?.length <= 0) return null

    return (
        <div className={className}>
            <nav aria-label="breadcrumb">
                <ul className="flex items-center text-sm md:text-lg">
                    <BreadCrumbStyle>
                        <Link href="/">
                            <p className="whitespace-nowrap text-sm font-medium text-[#0747A6]">
                                หน้าหลัก
                            </p>
                        </Link>
                        {breadcrumb.map((val) => (
                            <Link key={val.id} href={val.to}>
                                <p className="whitespace-nowrap text-sm font-medium">
                                    {breadcrumbConstant[
                                        val.breadCrumb as keyof typeof breadcrumbConstant
                                    ]
                                        ? breadcrumbConstant[
                                              val.breadCrumb as keyof typeof breadcrumbConstant
                                          ]
                                        : val.breadCrumb}
                                </p>
                            </Link>
                        ))}
                    </BreadCrumbStyle>
                </ul>
                <style jsx>
                    {`
                        li {
                            display: list-item;
                            padding: 5px 0px 5px 0px;
                            margin: 0 3px;
                        }
                    `}
                </style>
            </nav>
        </div>
    )
}
