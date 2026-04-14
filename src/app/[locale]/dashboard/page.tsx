import Link from 'next/link'

import type { Route } from 'next'

const sites = [
    {
        id: 'demo-site',
        name: 'Demo Site',
        description: 'Starter schema with editable hero content and image.',
    },
]

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-slate-100 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="rounded-[28px] bg-slate-950 px-8 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
                    <div className="text-xs uppercase tracking-[0.28em] text-sky-300">
                        Dashboard
                    </div>
                    <div className="mt-3 text-3xl font-semibold">
                        Manage builder sites
                    </div>
                    <div className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                        Start from the editor route, preview responsive widths,
                        and keep published rendering free from editor controls.
                    </div>
                </div>

                <div className="mt-8 grid gap-4">
                    {sites.map((site) => (
                        <div
                            key={site.id}
                            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <div className="text-xl font-semibold text-slate-900">
                                        {site.name}
                                    </div>
                                    <div className="mt-2 text-sm text-slate-600">
                                        {site.description}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        href={`/editor/${site.id}` as Route}
                                        className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={`/preview/${site.id}` as Route}
                                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
                                    >
                                        Preview
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
