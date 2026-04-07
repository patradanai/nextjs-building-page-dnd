'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NextPage, Route } from 'next'

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
    const router = usePathname()
    const breadcrumb: BreadCrumbChild[] = router
        .split('/')
        .filter(Boolean)
        .map((path, idx, routers) => ({
            id: `${path}-${idx}`,
            breadCrumb: path,
            to: `/${routers.slice(0, idx + 1).join('/')}`,
        }))

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
                            <Link key={val.id} href={val.to as Route}>
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
