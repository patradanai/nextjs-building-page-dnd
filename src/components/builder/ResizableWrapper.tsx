'use client'

import { useRef } from 'react'

import { useBuilderStore } from '@/stores/useBuilderStore'

const MIN_WIDTH = 120
const MIN_HEIGHT = 80

export const ResizableWrapper = ({
    nodeId,
    width,
    height,
    children,
}: {
    nodeId: string
    width: number
    height: number
    children: React.ReactNode
}) => {
    const selectedNodeId = useBuilderStore((state) => state.selectedNodeId)
    const updateNodeLayout = useBuilderStore((state) => state.updateNodeLayout)
    const dragStartRef = useRef<{
        startX: number
        startY: number
        width: number
        height: number
    } | null>(null)

    const isSelected = selectedNodeId === nodeId

    return (
        <div className="relative inline-block">
            {children}
            {isSelected ? (
                <button
                    type="button"
                    aria-label="Resize image"
                    className="absolute -bottom-2 -right-2 h-4 w-4 cursor-se-resize rounded-sm border border-white bg-sky-500 shadow"
                    onPointerDown={(event) => {
                        event.preventDefault()
                        event.stopPropagation()

                        dragStartRef.current = {
                            startX: event.clientX,
                            startY: event.clientY,
                            width,
                            height,
                        }

                        const handlePointerMove = (moveEvent: PointerEvent) => {
                            if (!dragStartRef.current) {
                                return
                            }

                            const nextWidth = Math.max(
                                MIN_WIDTH,
                                dragStartRef.current.width +
                                    moveEvent.clientX -
                                    dragStartRef.current.startX
                            )
                            const nextHeight = Math.max(
                                MIN_HEIGHT,
                                dragStartRef.current.height +
                                    moveEvent.clientY -
                                    dragStartRef.current.startY
                            )

                            updateNodeLayout(nodeId, {
                                width: nextWidth,
                                height: nextHeight,
                            })
                        }

                        const handlePointerUp = () => {
                            dragStartRef.current = null
                            window.removeEventListener(
                                'pointermove',
                                handlePointerMove
                            )
                            window.removeEventListener(
                                'pointerup',
                                handlePointerUp
                            )
                        }

                        window.addEventListener(
                            'pointermove',
                            handlePointerMove
                        )
                        window.addEventListener('pointerup', handlePointerUp)
                    }}
                />
            ) : null}
        </div>
    )
}
