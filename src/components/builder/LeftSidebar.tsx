'use client'

import { useBuilderStore } from '@/stores/useBuilderStore'

const buttons: Array<{
    label: string
    type: 'text' | 'button' | 'image'
}> = [
    { label: 'Add Text', type: 'text' },
    { label: 'Add Button', type: 'button' },
    { label: 'Add Image', type: 'image' },
]

export const LeftSidebar = () => {
    const addNodeToFirstSection = useBuilderStore(
        (state) => state.addNodeToFirstSection
    )

    return (
        <aside className="border-r border-slate-300 bg-slate-950 px-5 py-6 text-white">
            <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Add Elements
                </div>
                <div className="mt-2 text-sm text-slate-300">
                    Start simple. New blocks append to the first section.
                </div>
            </div>
            <div className="space-y-3">
                {buttons.map((button) => (
                    <button
                        key={button.type}
                        type="button"
                        className="flex w-full items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-sky-500 hover:bg-slate-800"
                        onClick={() => addNodeToFirstSection(button.type)}
                    >
                        <span>{button.label}</span>
                        <span className="text-slate-500">+</span>
                    </button>
                ))}
            </div>
        </aside>
    )
}
