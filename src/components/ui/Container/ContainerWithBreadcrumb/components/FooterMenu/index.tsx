'use client'

import React from 'react'

import { NextPage } from 'next'
import { useShallow } from 'zustand/react/shallow'

import { useGlobalStore } from '@/stores/useGlobalStore'

interface Props {
    componentRight?: React.ReactNode
    componentLeft?: React.ReactNode
}

export const FooterMenu: NextPage<Props> = ({
    componentRight,
    componentLeft,
}) => {
    const { isShowSidebar } = useGlobalStore(
        useShallow((state) => ({
            isShowSidebar: state.isShowSidebar,
        }))
    )

    return (
        <footer
            className={`fixed bottom-0 left-0 w-full bg-white py-5 ${
                isShowSidebar ? 'pl-[260px]' : 'pl-[78px]'
            } transition-all duration-500 ease-in-out`}
        >
            <div className="flex flex-row justify-between px-5">
                <div className="flex w-full justify-start">{componentLeft}</div>
                <div className="flex w-full justify-end">{componentRight}</div>
            </div>
        </footer>
    )
}
