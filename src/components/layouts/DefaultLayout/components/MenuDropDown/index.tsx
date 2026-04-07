import React, { useState } from 'react'

import { NextPage } from 'next'

interface IListMenuDropDown {
    children: React.ReactNode
    icons: React.ReactNode
    name: string
    status: boolean
}

const ListMenuDropDown: NextPage<IListMenuDropDown> = ({
    children,
    icons,
    name,
    status,
}) => {
    const [_isDropdown, setDropdown] = useState<boolean>(false)

    const handleDropdown = () => {
        setDropdown((val) => !val)
    }

    return (
        <button onClick={handleDropdown}>
            <li
                className={`group flex flex-col items-center ${
                    status ? 'w-[260px]' : 'w-[78px]'
                } `}
            >
                {/* Header Menu */}
                <a className="flex h-[44px] w-full cursor-pointer flex-row items-center px-[27px] hover:bg-[#475fd2]">
                    <div className="text-black group-hover:text-[#ffffff]">
                        {icons}
                    </div>
                    {status ? (
                        <>
                            <div className="animate-fade ml-2 text-sm font-normal text-black group-hover:text-[#ffffff]">
                                {name}
                            </div>
                            {/* <div className="ml-auto">
                                {isDropdown ? (
                                    <FontAwesomeIcon
                                        icon={faArrowDown}
                                        className="h-4 w-4 text-primary group-hover:text-white"
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        className="h-4 w-4 text-primary group-hover:text-white"
                                    />
                                )}
                            </div> */}
                        </>
                    ) : null}
                </a>
            </li>
            {/* List Dropdown */}
            {status ? (
                <div
                    className={
                        'max-h-[9999px] w-full overflow-hidden transition-all duration-300 ease-in-out'
                    }
                >
                    <ul>{children}</ul>
                </div>
            ) : null}
        </button>
    )
}

export default ListMenuDropDown
