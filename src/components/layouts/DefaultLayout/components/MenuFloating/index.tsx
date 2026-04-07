'use client'
import React from 'react'

import {
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faCircleChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'

interface Props {}

const MenuFloating: NextPage<Props> = () => {
    return (
        <div className="hidden w-full md:block">
            <div className="fixed left-0 top-[20%]">
                <div className="h-min-[200px] flex w-[55px] flex-col items-center justify-center gap-4 rounded-r bg-yellow-500 p-2">
                    <FontAwesomeIcon
                        icon={faCircleChevronDown}
                        className="size-7 text-white"
                    />
                    <span className="text-nowrap text-xl text-white [writing-mode:vertical-lr]">
                        Download
                    </span>
                    <FontAwesomeIcon
                        icon={faArrowAltCircleLeft}
                        className="size-7 text-white"
                    />
                </div>
            </div>

            <div className="fixed right-0 top-[20%]">
                <div className="h-min-[200px] flex w-[55px] flex-col items-center justify-center gap-4 rounded-l bg-yellow-500 p-2">
                    <FontAwesomeIcon
                        icon={faCircleChevronDown}
                        className="size-7 text-white"
                    />
                    <span className="text-nowrap text-xl text-white [writing-mode:vertical-lr]">
                        HUBUNGI KAMI
                    </span>
                    <FontAwesomeIcon
                        icon={faArrowAltCircleRight}
                        className="size-7 text-white"
                    />
                </div>
            </div>
        </div>
    )
}

export default MenuFloating
