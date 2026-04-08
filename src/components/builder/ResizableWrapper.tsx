'use client'

import React, { useState } from 'react'

type Props = {
    onResize?: (size: { width: number; height: number }) => void
    width?: number
    height?: number
    enabled?: boolean
    children: React.ReactNode
}

export function ResizableWrapper({
    width = 320,
    height = 200,
    enabled = false,
    onResize,
    children,
}: Props) {
    const [isResizing, setIsResizing] = useState(false)

    const startResize = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()

        const startX = e.clientX
        const startY = e.clientY
        const startWidth = width
        const startHeight = height

        setIsResizing(true)

        const handleMouseMove = (event: MouseEvent) => {
            const dx = event.clientX - startX
            const dy = event.clientY - startY

            const nextWidth = Math.max(80, startWidth + dx)
            const nextHeight = Math.max(60, startHeight + dy)

            onResize?.({
                width: nextWidth,
                height: nextHeight,
            })
        }

        const handleMouseUp = () => {
            setIsResizing(false)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
    }

    return (
        <div className="relative inline-block">
            {children}

            {enabled && (
                <button
                    type="button"
                    onMouseDown={startResize}
                    className="absolute bottom-0 right-0 z-20 h-4 w-4 translate-x-1/2 translate-y-1/2 cursor-se-resize rounded-sm border border-blue-600 bg-white"
                />
            )}

            {enabled && isResizing && (
                <div className="pointer-events-none absolute inset-0 rounded ring-2 ring-blue-500" />
            )}
        </div>
    )
}
