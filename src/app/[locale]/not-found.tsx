'use client'
import React from 'react'

import Head from 'next/head'

const NotFound = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Head>
                    <title>Error 404</title>
                </Head>
                <div className="flex min-h-screen w-full flex-col items-center justify-center">
                    <p className="text-center text-[200px] font-bold">
                        Code 404
                    </p>
                    <p className="text-center text-[50px]">Page Not Found</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound
