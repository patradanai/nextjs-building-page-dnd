import React from 'react'

import { NextPage } from 'next'

interface IListMenuDropHeader {
    headerName: string
    isShowSidebar: boolean
}

const ListMenuDropHeader: NextPage<IListMenuDropHeader> = ({
    headerName,
    isShowSidebar,
}) => {
    return (
        <>
            <li className="mt-5 h-[25px] px-[27px] text-[#3b3b3c]">
                {isShowSidebar ? (
                    <p className="mb-5 font-bold uppercase text-black">
                        {headerName}
                    </p>
                ) : (
                    <p className="animate-fade text-center tracking-widest">
                        ...
                    </p>
                )}
            </li>
        </>
    )
}

export default ListMenuDropHeader
