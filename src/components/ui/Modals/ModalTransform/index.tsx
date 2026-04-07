import React, { useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'

interface IModalTransform {
    children?: React.ReactNode
    isModal: boolean
    onClick: (_event: any) => void
    refDiv?: any
}

export const ModalTransform: NextPage<IModalTransform> = ({
    children,
    isModal,
    refDiv,
}) => {
    useEffect(() => {
        // Disable Scrollbar when active
        if (isModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isModal])

    return (
        <AnimatePresence>
            {isModal && (
                <motion.div
                    key="modal"
                    initial={{ left: '150%' }}
                    animate={{ left: '0%' }}
                    exit={{ left: '150%' }}
                    transition={{ duration: 1 }}
                    className={`${
                        isModal ? 'pointer-events-auto' : 'pointer-events-none'
                    } z-100 fixed left-0 top-0 size-full min-w-[600px]`}
                >
                    <div
                        ref={refDiv}
                        className="relative inset-auto size-full overflow-hidden"
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
