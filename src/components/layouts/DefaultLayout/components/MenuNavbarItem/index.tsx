import React, { useState } from 'react'

import { NextPage } from 'next'

import Section from '@/components/ui/Container/Section'

interface Props {
    name: string
    icons: React.ReactNode
    children?: React.ReactNode
}

const MenuNavbarItem: NextPage<Props> = ({ name, icons, children }) => {
    const [isOpenMenu, setOpenMenu] = useState<boolean>(false)

    const handlerMenu = (state: boolean) => {
        setOpenMenu(state)
    }

    return (
        <div
            className="size-full py-2 hover:bg-yellow-500"
            onMouseEnter={() => handlerMenu(true)}
            onMouseLeave={() => handlerMenu(false)}
        >
            <div className="flex size-full flex-col items-center justify-center gap-2">
                {icons}
                <p className="text-white">{name}</p>
            </div>

            {isOpenMenu && children ? (
                <div className="absolute left-0 z-50 w-full">
                    <div className="w-full bg-[#131631]">
                        <Section>{children}</Section>
                        <div className="h-5 w-full bg-[#471525]" />
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default MenuNavbarItem
