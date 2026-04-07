import React from 'react'

import { usePathname } from 'next/navigation'

import { NextPage } from 'next'

import { Link } from '@/i18n/navigation'

interface Props {
    name: string
    src: string
}

const ListMenuDropdownChild: NextPage<Props> = ({ name, src }) => {
    const pathname = usePathname()

    return (
        <Link href={src}>
            <li
                className={`group flex h-[44px] items-center px-[27px] before:mx-3 before:text-black before:content-['-'] hover:bg-[#475fd2] ${
                    pathname === src ? 'bg-[#475fd2]' : ''
                } `}
            >
                <p
                    className={`text-sm font-extralight group-hover:text-[#ffffff] ${
                        pathname === src ? 'text-white' : 'text-[#7c35ff]'
                    } `}
                >
                    {name}
                </p>
            </li>
        </Link>
    )
}

export default ListMenuDropdownChild
