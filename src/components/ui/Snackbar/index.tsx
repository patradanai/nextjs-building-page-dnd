'use client'

import React, { useEffect } from 'react'

import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    message?: string
    isOpen?: boolean
    type?: 'success' | 'error' | 'warning' | 'info'
}

export const Snackbar: NextPage<Props> = ({ message, isOpen, type }) => {
    const [open, setOpen] = React.useState(isOpen)
    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 5000)
    }, [])

    const bgVariant = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500',
    }
    return (
        <>
            <AnimatePresence initial>
                {open && (
                    <motion.div
                        initial={{ y: 300 }}
                        animate={{ y: 0 }}
                        exit={{ y: 300 }}
                        className="fixed bottom-5 right-5 z-50"
                        key="snackbar"
                    >
                        <div
                            className={cn(
                                'h-16 min-w-[350px] rounded-lg',
                                bgVariant[type as keyof typeof type] ??
                                    'bg-primary/80'
                            )}
                        >
                            <div className="p-4">
                                <div className="flex w-full items-center justify-between">
                                    <p className="text-white">{message}</p>
                                    <FontAwesomeIcon
                                        icon={faClose}
                                        className="size-8"
                                        onClick={() => setOpen(false)}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
