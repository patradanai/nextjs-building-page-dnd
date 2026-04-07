import React, { useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'

interface IModalOpacity {
    children?: React.ReactNode
    isModal: boolean
    onClick: (_event: any) => void
    refDiv?: any
}

export const ModalOpacity: NextPage<IModalOpacity> = ({
    children,
    isModal,
    onClick,
    refDiv,
}) => {
    useEffect(() => {
        // Disable Scrollbar when active
        if (isModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isModal])

    return (
        <AnimatePresence>
            {isModal && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${
                        isModal ? 'pointer-events-auto' : 'pointer-events-none'
                    } z-100 fixed left-0 top-0 size-full min-w-[600px]`}
                >
                    <button
                        className={
                            'overlay z-20 size-full bg-[rgba(0,0,0,0.7)]'
                        }
                        onClick={() => onClick(!isModal)}
                    />

                    <div
                        ref={refDiv}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
