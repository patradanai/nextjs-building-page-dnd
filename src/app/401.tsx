import React from 'react'

import Head from 'next/head'

export const PermissionPage = () => {
    return (
        <div>
            <div className="container mx-auto text-black">
                <Head>
                    <title>Error 401</title>
                </Head>
                <div className="flex min-h-screen w-full flex-col items-center justify-center">
                    <p className="text-center text-[200px] font-bold">401</p>
                    <p className="text-center text-[50px]">
                        Permission Not Allow
                    </p>
                </div>
            </div>
        </div>
    )
}
