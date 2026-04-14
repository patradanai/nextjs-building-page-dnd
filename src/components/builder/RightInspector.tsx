'use client'

import { findNodeById } from '@/lib/builder/node-helpers'
import { useBuilderStore } from '@/stores/useBuilderStore'

export const RightInspector = () => {
    const page = useBuilderStore((state) => state.page)
    const selectedNodeId = useBuilderStore((state) => state.selectedNodeId)
    const updateNodeContent = useBuilderStore(
        (state) => state.updateNodeContent
    )
    const updateNodeStyle = useBuilderStore((state) => state.updateNodeStyle)

    const selectedNode = findNodeById(page, selectedNodeId)

    return (
        <aside className="border-l border-slate-300 bg-white px-5 py-6">
            <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Inspector
                </div>
                <div className="mt-2 text-sm text-slate-600">
                    {selectedNode
                        ? `Editing ${selectedNode.type}`
                        : 'Select a block to edit its settings.'}
                </div>
            </div>

            {!selectedNode ? null : (
                <div className="space-y-4">
                    {selectedNode.type === 'text' ? (
                        <>
                            <label className="block space-y-2">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Text Content
                                </span>
                                <textarea
                                    className="min-h-28 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-500"
                                    value={selectedNode.content?.text ?? ''}
                                    onChange={(event) =>
                                        updateNodeContent(selectedNode.id, {
                                            text: event.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label className="block space-y-2">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Font Size
                                </span>
                                <input
                                    type="number"
                                    min={12}
                                    max={96}
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-500"
                                    value={selectedNode.style?.fontSize ?? 18}
                                    onChange={(event) =>
                                        updateNodeStyle(selectedNode.id, {
                                            fontSize: Number(
                                                event.target.value
                                            ),
                                        })
                                    }
                                />
                            </label>
                        </>
                    ) : null}

                    {selectedNode.type === 'button' ? (
                        <>
                            <label className="block space-y-2">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Label
                                </span>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-500"
                                    value={selectedNode.content?.label ?? ''}
                                    onChange={(event) =>
                                        updateNodeContent(selectedNode.id, {
                                            label: event.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label className="block space-y-2">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Href
                                </span>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-500"
                                    value={selectedNode.content?.href ?? ''}
                                    onChange={(event) =>
                                        updateNodeContent(selectedNode.id, {
                                            href: event.target.value,
                                        })
                                    }
                                />
                            </label>
                        </>
                    ) : null}

                    {selectedNode.type === 'image' ? (
                        <>
                            <label className="block space-y-2">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Image Source
                                </span>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-500"
                                    value={selectedNode.content?.src ?? ''}
                                    onChange={(event) =>
                                        updateNodeContent(selectedNode.id, {
                                            src: event.target.value,
                                        })
                                    }
                                />
                            </label>
                            <label className="block space-y-2">
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                    Alt Text
                                </span>
                                <input
                                    type="text"
                                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-500"
                                    value={selectedNode.content?.alt ?? ''}
                                    onChange={(event) =>
                                        updateNodeContent(selectedNode.id, {
                                            alt: event.target.value,
                                        })
                                    }
                                />
                            </label>
                        </>
                    ) : null}

                    {selectedNode.type === 'section' ? (
                        <label className="block space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                Background Color
                            </span>
                            <input
                                type="color"
                                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-2 py-1"
                                value={
                                    selectedNode.style?.backgroundColor ??
                                    '#ffffff'
                                }
                                onChange={(event) =>
                                    updateNodeStyle(selectedNode.id, {
                                        backgroundColor: event.target.value,
                                    })
                                }
                            />
                        </label>
                    ) : null}
                </div>
            )}
        </aside>
    )
}
