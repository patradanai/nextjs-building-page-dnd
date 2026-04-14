'use client'

import { Canvas } from '@/components/builder/Canvas'
import { LeftSidebar } from '@/components/builder/LeftSidebar'
import { RightInspector } from '@/components/builder/RightInspector'
import { TopToolbar } from '@/components/builder/TopToolbar'

export const EditorShell = ({ siteId }: { siteId: string }) => {
    return (
        <div className="flex min-h-screen flex-col bg-slate-200">
            <TopToolbar siteId={siteId} />
            <div className="grid flex-1 grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
                <LeftSidebar />
                <Canvas />
                <RightInspector />
            </div>
        </div>
    )
}
