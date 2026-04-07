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
                'sticky inset-x-0 top-0 z-10 mb-5 h-[54px] w-full bg-transparent'
            }
        >
            <div className="border-b-secondary flex h-full flex-row items-center justify-between px-5 pt-5">
                {/* Agent Name */}
                <div className="">
                    <BreadCrumb />
                </div>

                {/* User Info */}
                <div className="flex h-full items-center justify-center">
                    {componentRight}
                </div>
            </div>
        </nav>
    )
}
