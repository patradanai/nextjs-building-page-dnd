import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { NextPage } from 'next'

interface IPropMenuList {
    children: React.ReactNode
    onClose?: () => void
    onMouseLeave?: () => void
    isOpen: boolean
}

const MenuList: NextPage<IPropMenuList> = (props) => {
    const { children, isOpen, onMouseLeave } = props
    return (
        <div className="relative">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="z-999 absolute -left-1/2 top-1/2 min-h-full min-w-[100px] rounded-md bg-white py-2 transition-opacity"
                        onMouseLeave={onMouseLeave}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface IPropMenuItem {
    children: React.ReactNode
    onClick?: () => void
}

const MenuItem: NextPage<IPropMenuItem> = ({ children, onClick }) => {
    return (
        <div
            className="flex h-[30px] w-full cursor-pointer items-center justify-start bg-white px-3 hover:bg-gray-300"
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export { MenuItem, MenuList }
