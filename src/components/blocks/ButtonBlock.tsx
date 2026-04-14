import Link from 'next/link'

import { BuilderNode } from '@/types/builder'

import type { Route } from 'next'

export const ButtonBlock = ({
    node,
    mode,
}: {
    node: BuilderNode
    mode: 'editor' | 'published'
}) => {
    if (mode === 'editor') {
        return (
            <div className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
                {node.content?.label ?? 'Button'}
            </div>
        )
    }

    return (
        <Link
            href={(node.content?.href ?? '#') as Route}
            className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
            {node.content?.label ?? 'Button'}
        </Link>
    )
}
