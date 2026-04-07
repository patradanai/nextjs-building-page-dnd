'use client'
import React from 'react'

import {
    faChrome,
    faFacebook,
    faFirefox,
    faLine,
    faSafari,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'

import Spacer from '@/components/ui/Container/Spacer'
import { ImageLoader } from '@/components/ui/ImageLoader'
import { useHomeClient } from '@/hooks/useHome'
import { env } from '@/utils/env'

interface Props {}

export const Footer: NextPage<Props> = () => {
    const { data, loading, error } = useHomeClient(env.NEXT_PUBLIC_RESOURCE_ID)

    if (loading) return <div>Loading...</div>

    if (error) return <div>Error</div>

    return (
        <footer className={'container mx-auto'}>
            <div className="items-left flex flex-col justify-between px-5">
                {/* Section 1 */}
                <div>
                    <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2">
                        <div className="w-full">
                            <p className="text-center text-white md:text-left">
                                Tentang kami|Info Perbankan|Pusat Info|Hubungi
                                kami
                            </p>
                        </div>

                        <div className="w-full">
                            <p className="text-center text-white md:text-right">
                                @2024
                            </p>
                        </div>
                    </div>
                </div>
                <Spacer size={10} />

                {/* Section 2 */}
                <div>
                    <p className="text-sm text-white">Social</p>
                    <Spacer size={10} />

                    <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:place-items-start">
                        <div className="">
                            <ImageLoader
                                src="https://files.sitestatic.net/ImageFile/63bfeb444c47a_logo-revisi-lagi.gif"
                                alt="userinfo"
                                style={{ objectFit: 'contain' }}
                                width={200}
                                height={150}
                            />
                        </div>

                        <div className="flex items-center justify-end">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={'//' + data?.resource.socialFacebook}
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="size-8 text-white"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={'//' + data?.resource.socialTwitter}
                            >
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="size-8 text-white"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={'//' + data?.resource.socialLine}
                            >
                                <FontAwesomeIcon
                                    icon={faLine}
                                    className="size-8 text-white"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={'//' + data?.resource.socialYoutube}
                            >
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="size-8 text-white"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <Spacer size={10} />
                {/* Section 3 */}
                <div>
                    <p className="text-sm text-white">Payment</p>
                    <Spacer size={10} />
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="flex gap-5">
                            <ImageLoader
                                src="https://files.sitestatic.net/sprites/bank_logos/bank_col.jpg?v=4"
                                alt="bank"
                                width={150}
                                height={50}
                                className="rounded-md"
                            />
                            <ImageLoader
                                src="https://files.sitestatic.net/sprites/bank_logos/ewallet_col.jpg?v=4"
                                alt="bank"
                                width={150}
                                height={50}
                                className="rounded-md"
                            />
                            <ImageLoader
                                src="https://files.sitestatic.net/sprites/bank_logos/pulsa_col.jpg?v=4"
                                alt="bank"
                                width={150}
                                height={50}
                                className="rounded-md"
                            />
                        </div>

                        <div className="flex flex-col items-end justify-center">
                            <p className="text-sm text-white">
                                Browers Support
                            </p>
                            <Spacer size={10} />

                            <div className="space-x-5">
                                <FontAwesomeIcon
                                    icon={faChrome}
                                    className="size-8 text-yellow-500"
                                />
                                <FontAwesomeIcon
                                    icon={faFirefox}
                                    className="size-8 text-yellow-500"
                                />
                                <FontAwesomeIcon
                                    icon={faSafari}
                                    className="size-8 text-yellow-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Spacer size={10} />
                {/* Section 4 */}
                <div>
                    <p className="text-sm text-white">Game Provider</p>
                    <Spacer size={10} />
                    <ImageLoader
                        src="https://files.sitestatic.net/images/footer_provider_white.png?v=0.5"
                        alt="provider"
                        width={1924}
                        height={300}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
        </footer>
    )
}
