import React from 'react'

import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'next-auth/react'
import { useShallow } from 'zustand/react/shallow'

// import { LocaleSwitcher } from '@/components/ui/I18n/LocaleSwitching'
import { ImageLoader } from '@/components/ui/ImageLoader'
import * as Menu from '@/constants/menu'
import { Link } from '@/i18n/navigation'
import { useGlobalStore } from '@/stores/useGlobalStore'
import { cn } from '@/utils/cn'
import { env } from '@/utils/env'

import ListMenuDropdown from './components/MenuDropDown'
import ListMenuDropdownChild from './components/MenuDropdownList'
import ListMenuDropHeader from './components/MenuHeader'
import ListMenu from './components/MenuList'

import type { NextPage } from 'next'

export const Sidebar: NextPage = () => {
    const { isShowSidebar, icon } = useGlobalStore(
        useShallow((state) => ({
            isShowSidebar: state.isShowSidebar,
            icon: state.icon,
            version: state.version,
        }))
    )

    const mapMenuList = () => {
        return Menu.menu.map((menu) => {
            return (
                <div key={menu.groupName}>
                    <ListMenuDropHeader
                        isShowSidebar={isShowSidebar}
                        headerName={menu.groupName}
                        key={menu.groupName}
                    />
                    {menu.groupRoutes.map((menuList) => {
                        if (menuList.sub_menu.length) {
                            ;<ListMenuDropdown
                                key={menuList.name}
                                icons={
                                    <FontAwesomeIcon
                                        icon={menuList.icon}
                                        className="h-4 w-4"
                                    />
                                }
                                name={'สต๊อก'}
                                status={isShowSidebar}
                            >
                                {menuList.sub_menu.map((subMenu) => (
                                    <ListMenuDropdownChild
                                        key={subMenu.name}
                                        name={subMenu.name}
                                        src={subMenu.route}
                                    />
                                ))}
                            </ListMenuDropdown>
                        }

                        return (
                            <ListMenu
                                key={menuList.name}
                                icons={
                                    <FontAwesomeIcon
                                        icon={menuList.icon}
                                        className="h-4 w-4"
                                    />
                                }
                                name={menuList.name}
                                status={isShowSidebar}
                                src={menuList.route}
                            />
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <aside
            className={cn(
                `fixed inset-0 z-[100] h-full bg-white pt-5 transition-all delay-150 ease-in-out motion-reduce:transition-none ${
                    isShowSidebar ? 'w-[260px]' : 'w-[78px]'
                }`
            )}
        >
            <div
                className={cn(
                    'flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden',
                    'scrollbar-thin scrollbar-thumb-info scrollbar-thumb-rounded-full'
                )}
            >
                {/* Header Company */}
                <div className="flex min-h-[78px] flex-row items-center justify-between px-[25px]">
                    {isShowSidebar ? (
                        <div className="w-full">
                            <div className="flex w-full cursor-pointer justify-center text-white">
                                <Link href="/">
                                    <ImageLoader
                                        alt="logo"
                                        src={icon || '/images/logo.avif'}
                                        style={{ objectFit: 'contain' }}
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>

                {/* List */}
                <div className="mb-auto">
                    <ul>
                        {mapMenuList()}
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faSignOut}
                                    className="h-4 w-4"
                                />
                            }
                            name="ลงชื่ออก"
                            status={isShowSidebar}
                            onClick={() =>
                                signOut({
                                    redirect: true,
                                    callbackUrl: '/auth/login',
                                })
                            }
                            src=""
                        />
                    </ul>
                </div>

                {/* <LocaleSwitcher /> */}
                <div className="flex items-center justify-center py-5">
                    <p className="text-center text-sm text-[#bcc8ff]">
                        Version {env.NEXT_PUBLIC_APP_VERSION}
                    </p>
                </div>
            </div>
        </aside>
    )
}
