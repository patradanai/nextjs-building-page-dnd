import React from 'react'

import { NextPage } from 'next'

import { BreadCrumb } from '@/components/ui/Breadcrumb'

interface INavbarListMenu {
    componentRight?: React.ReactNode
}

export const NavbarListMenu: NextPage<INavbarListMenu> = ({
    componentRight,
}) => {
    return (
        <nav
            className={
                'sticky inset-x-0 top-0 z-10 h-[54px] w-full bg-transparent'
            }
        >
            <div className="border-b-secondary flex h-full flex-row items-center justify-between px-8">
                {/* Agent Name */}
                <div className="">
                    <BreadCrumb />
                </div>

                {/* User Info */}
                <div>{componentRight}</div>
            </div>
        </nav>
    )
}
