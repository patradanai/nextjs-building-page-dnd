import React from 'react'

import { faBaseball } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'

import MenuNavbarItem from '../MenuNavbarItem'

const MenuNavbar: NextPage = () => {
    return (
        <div className="bg-linear-to-l hidden w-full from-[#871937] via-[#2a3b7b] to-[#871937] md:block">
            <div className="w-full">
                <div className="flex size-full items-center justify-between">
                    <div className="container mx-auto size-full">
                        <ul className="nav-list flex w-full items-center justify-between">
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="SLOTS"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="SPORT"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="CASINO"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="TEMBAK IKAN"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="LOTTO"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="E-GAMES"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="SABUNG AYAM"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                            <li className="nav-list__child w-full">
                                <MenuNavbarItem
                                    name="PROMOSI"
                                    icons={
                                        <FontAwesomeIcon
                                            icon={faBaseball}
                                            className="size-6 text-white"
                                        />
                                    }
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuNavbar
