import React from 'react'

import { NextPage } from 'next'

import { FooterMenu } from './components/FooterMenu'
import { NavbarListMenu } from './components/NavbarListMenu'

interface Props {
    children: React.ReactNode
    componentRight?: React.ReactNode
    footerComponentRight?: React.ReactNode
    footerComponentLeft?: React.ReactNode
}

const ContainerWithBreadcrumb: NextPage<Props> = ({
    children,
    componentRight,
    footerComponentRight,
    footerComponentLeft,
}) => {
    return (
        <div className="mb-24 flex w-full flex-col text-black">
            <NavbarListMenu componentRight={componentRight} />
            <hr className="border-gray-300" />
            <div className="min-h-full w-full p-5">{children}</div>
            <FooterMenu
                componentRight={footerComponentRight}
                componentLeft={footerComponentLeft}
            />
        </div>
    )
}

export default ContainerWithBreadcrumb
