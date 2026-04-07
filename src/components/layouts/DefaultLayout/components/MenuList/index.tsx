import React, { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IListMenu {
    icons: React.ReactNode
    name: string
    src: string
    status: boolean
    onClick?: () => void
}

const ListMenu: FC<IListMenu> = ({ icons, name, status, src, onClick }) => {
    const pathname = usePathname()
    return (
        <li
            className={`group flex flex-row items-center ${
                status ? 'w-[260px]' : 'w-[78px]'
            } h-[44px] hover:bg-[#475fd2] ${
                pathname === src ? 'bg-[#475fd2]' : ''
            }`}
        >
            <button className="size-full" onClick={onClick}>
                <Link href={src}>
                    <div className="flex cursor-pointer flex-row items-center space-x-2 px-[27px]">
                        <div
                            className={`group-hover:text-[#ffffff] ${
                                pathname === src
                                    ? 'text-[#ffffff]'
                                    : 'text-black'
                            }`}
                        >
                            {icons}
                        </div>
                        {status ? (
                            <span
                                className={`animate-fade text-sm font-normal group-hover:text-[#ffffff] ${
                                    pathname === src
                                        ? 'text-[#ffffff]'
                                        : 'text-black'
                                } `}
                            >
                                {name}
                            </span>
                        ) : null}
                    </div>
                </Link>
            </button>
        </li>
    )
}

export default ListMenu
