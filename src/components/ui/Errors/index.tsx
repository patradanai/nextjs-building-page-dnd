import React from 'react'

import { NextPage } from 'next'

interface Props {}

export const Error: NextPage<Props> = () => {
    return (
        <div className="">
            <div className="bg-gray/25 flex h-[40px] items-center justify-center rounded-md px-20 py-8">
                <p className="text-sm text-black">Something went wrong</p>
            </div>
        </div>
    )
}

export default Error
