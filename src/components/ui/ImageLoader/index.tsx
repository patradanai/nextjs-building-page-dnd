'use client'
import React, { useState } from 'react'

import NextImage, { ImageProps } from 'next/image'

export const ImageLoader = (props: ImageProps) => {
    const [isImageError, setIsImageError] = useState(false)

    const noImage = (width: number, height: number) => {
        return (
            <NextImage
                {...{
                    ...props,
                    src: '/images/no-image.svg',
                }}
                height={width}
                width={height}
                className="bg-white"
            />
        )
    }

    return (
        <>
            {props.src ? (
                !isImageError ? (
                    <NextImage
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM087ppDAADpQGO4xm9mwAAAABJRU5ErkJggg=="
                        onError={() => setIsImageError(true)}
                        {...props}
                    />
                ) : (
                    noImage(props.width as number, props.height as number)
                )
            ) : (
                noImage(props.width as number, props.height as number)
            )}
        </>
    )
}
