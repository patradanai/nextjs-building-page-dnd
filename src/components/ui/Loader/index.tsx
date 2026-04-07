import React from 'react'

import _ from 'lodash'
import { NextPage } from 'next'

interface Props {
    isLoading: boolean[]
}

export const Loader: NextPage<Props> = ({ isLoading = [false] }) => {
    return (
        <div
            className={`${
                _.includes(isLoading, true) ? 'fixed' : 'hidden'
            } left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2`}
        >
            <div className="bg-gray/25 flex h-[40px] items-center justify-center rounded-md px-20 py-8">
                <p className="text-sm text-[#999]">Please loading...</p>
                <span className="border-b-primary ml-5 size-6 animate-spin rounded-full border-4 border-[#c2c0c0]" />
            </div>
        </div>
    )
}

export default Loader
