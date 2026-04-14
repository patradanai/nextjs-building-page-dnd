'use client'

import Link from 'next/link'

import { PublishedRenderer } from '@/components/renderer/PublishedRenderer'
import { useBuilderStore } from '@/stores/useBuilderStore'

import type { Route } from 'next'

interface Props {
    siteId: string
}

const PreviewPage = ({ siteId }: Props) => {
    const page = useBuilderStore((state) => state.page)

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="border-b border-slate-200 bg-white px-6 py-4">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
                    <div>
                        <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                            Preview
                        </div>
                        <div className="mt-1 text-lg font-semibold text-slate-900">
                            {siteId}
                        </div>
                    </div>
                    <Link
                        href={`/editor/${siteId}` as Route}
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                        Back to editor
                    </Link>
                </div>
            </div>
            <PublishedRenderer node={page} />
        </div>
    )
}

export default PreviewPage
