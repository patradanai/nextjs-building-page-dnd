'use client'

import { EditorRenderer } from '@/components/renderer/EditorRenderer'
import { useBuilderStore } from '@/stores/useBuilderStore'

const viewportClassNames = {
    desktop: 'w-full max-w-6xl',
    tablet: 'w-full max-w-[768px]',
    mobile: 'w-full max-w-[390px]',
}

export const Canvas = () => {
    const page = useBuilderStore((state) => state.page)
    const viewport = useBuilderStore((state) => state.viewport)
    const setSelectedNodeId = useBuilderStore(
        (state) => state.setSelectedNodeId
    )

    return (
        <div
            className="flex min-h-0 flex-1 items-start justify-center overflow-auto bg-slate-200 p-8"
            onClick={() => setSelectedNodeId(null)}
        >
            <div
                className={`${viewportClassNames[viewport]} min-h-[900px] rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition-all`}
            >
                <EditorRenderer node={page} />
            </div>
        </div>
    )
}
