import React from 'react'

import { NextPage } from 'next'
import { useShallow } from 'zustand/react/shallow'

import { ImageLoader } from '@/components/ui/ImageLoader'
import { useGlobalStore } from '@/stores/useGlobalStore'

export const Header: NextPage = () => {
    const { name, isShowSidebar } = useGlobalStore(
        useShallow((state) => ({
            isShowSidebar: state.isShowSidebar,
            name: state.name,
        }))
    )

    return (
        <nav
            className={`fixed inset-x-0 ${
                isShowSidebar ? 'pl-[260px]' : 'pl-[78px]'
            } transition-all duration-500 ease-in-out`}
        >
            <div className="border-b-secondary flex h-[75px] flex-row items-center justify-between border-b-[1px] bg-white">
                {/* Agent Name */}
                <div className="text-primary ml-6 h-10 rounded bg-[#f0f3ff] p-3 text-sm">
                    {name}
                </div>

                {/* User Info */}
                <div className="ml-auto mr-6 flex h-14 cursor-pointer flex-row items-center rounded-full py-2 pl-2 text-sm hover:bg-[#f0f3ff]">
                    <p className="text-sm text-[#959cb6]">Hi, </p>
                    <p className="indent-1 text-[#6c7293]">
                        {/* {userProfile?.name} */}
                    </p>
                    <div className="relative m-2 h-10 w-10">
                        <ImageLoader
                            src="/images/logo.avif"
                            alt="userinfo"
                            className="rounded-full"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </nav>
    )
}
