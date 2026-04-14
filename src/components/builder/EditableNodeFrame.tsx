'use client'

import { useBuilderStore } from '@/stores/useBuilderStore'

export const EditableNodeFrame = ({
    nodeId,
    children,
}: {
    nodeId: string
    children: React.ReactNode
}) => {
    const selectedNodeId = useBuilderStore((state) => state.selectedNodeId)
    const setSelectedNodeId = useBuilderStore(
        (state) => state.setSelectedNodeId
    )

    const isSelected = selectedNodeId === nodeId

    return (
        <div
            className={`relative rounded-xl transition ${
                isSelected
                    ? 'ring-2 ring-sky-500 ring-offset-4 ring-offset-white'
                    : 'ring-1 ring-transparent'
            }`}
            onClick={(event) => {
                event.stopPropagation()
                setSelectedNodeId(nodeId)
            }}
        >
            {isSelected ? (
                <div className="pointer-events-none absolute -top-6 left-0 rounded-md bg-sky-500 px-2 py-1 text-[11px] font-medium text-white">
                    {nodeId}
                </div>
            ) : null}
            {children}
        </div>
    )
}
