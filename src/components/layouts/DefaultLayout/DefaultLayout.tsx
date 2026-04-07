'use client'
import React from 'react'

import { NextPage } from 'next'

import { useGlobalStore } from '@/stores/useGlobalStore'

import { Sidebar } from './Sidebar'

/**
 *
 * DefaultLayout
 *
 */

interface Props {
    children: React.ReactNode
}

const DefaultLayout: NextPage<Props> = ({ children }) => {
    const isShowSidebar = useGlobalStore((state) => state.isShowSidebar)

    return (
        <div className="box-border flex min-h-screen w-full min-w-[1440px] flex-col justify-between overflow-auto bg-[#F2F3F8]">
            <div className="mb-auto flex h-full w-full flex-row">
                <Sidebar />
                <div className={'h-full w-full'}>
                    <div
                        className={`${
                            isShowSidebar ? 'pl-[260px]' : 'pl-[78px]'
                        } h-full w-full transition-all duration-500 ease-in-out`}
                    >
                        <div className="relative">
                            <div className="h-full w-full overflow-y-auto bg-[#F2F3F8]">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
