'use client'
import React from 'react'

import Head from 'next/head'

const Error = () => {
    return (
        <div>
            <div className="container mx-auto h-full bg-white">
                <Head>
                    <title>Error 500</title>
                </Head>
                <div className="flex min-h-screen w-full flex-col items-center justify-center">
                    <p className="h-[150px] text-center text-[200px] font-bold">
                        500
                    </p>
                    <p className="text-center text-[50px]">
                        Internal Server Error
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Error
