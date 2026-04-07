import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    children?: React.ReactNode
    className?: string
    bgImage?: string
}

const Section: NextPage<Props> = ({ children, className, bgImage }) => {
    return (
        <section
            className={cn('container mx-auto', className)}
            style={{
                backgroundImage: bgImage,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
            }}
        >
            {children}
        </section>
    )
}

export default Section
