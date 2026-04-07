import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    children: React.ReactNode
    className?: string
    backdrop?: string
    isBackdrop?: boolean
    bgImage?: string
}

const Container: NextPage<Props> = ({
    children,
    className,
    backdrop,
    bgImage,
    isBackdrop,
}) => {
    return (
        <main
            className={cn(
                'flex h-full min-h-screen w-full flex-col',
                className
            )}
            style={{ backgroundImage: bgImage }}
        >
            {isBackdrop && (
                <div
                    className={cn(
                        'absolute left-0 top-0 z-0 h-full w-full bg-white/20',
                        backdrop
                    )}
                />
            )}
            <div className={cn('min-h-screen w-full')}>{children}</div>
        </main>
    )
}

export default Container
