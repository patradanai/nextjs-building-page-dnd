'use client'

import Link from 'next/link'

import { useBuilderStore } from '@/stores/useBuilderStore'
import { BuilderViewport } from '@/types/builder'

import type { Route } from 'next'

const viewportOptions: BuilderViewport[] = ['desktop', 'tablet', 'mobile']

export const TopToolbar = ({ siteId }: { siteId: string }) => {
    const viewport = useBuilderStore((state) => state.viewport)
    const setViewport = useBuilderStore((state) => state.setViewport)

    return (
        <header className="border-b border-slate-300 bg-white px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        Builder
                    </div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">
                        Site editor: {siteId}
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex rounded-full border border-slate-200 bg-slate-100 p-1">
                        {viewportOptions.map((option) => (
                            <button
                                key={option}
                                type="button"
                                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                                    viewport === option
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-600'
                                }`}
                                onClick={() => setViewport(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="hidden rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm text-slate-400 md:block">
                        Save / Undo / Redo
                    </div>

                    <Link
                        href={`/preview/${siteId}` as Route}
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                    >
                        Preview
                    </Link>

                    <Link
                        href={`/published/${siteId}` as Route}
                        className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
                    >
                        Publish
                    </Link>
                </div>
            </div>
        </header>
    )
}
