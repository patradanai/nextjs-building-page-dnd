import Link from 'next/link'

import type { Route } from 'next'

const links: Array<{ href: string; label: string }> = [
    {
        href: '/dashboard',
        label: 'Open dashboard',
    },
    {
        href: '/editor/demo-site',
        label: 'Open editor',
    },
    {
        href: '/preview/demo-site',
        label: 'Open preview',
    },
    {
        href: '/published/demo-site',
        label: 'Open published',
    },
]

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#dbeafe,_#e2e8f0_35%,_#cbd5e1)] px-6 py-12">
            <div className="w-full max-w-4xl rounded-[32px] border border-white/60 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur md:p-12">
                <div className="max-w-2xl">
                    <div className="text-xs uppercase tracking-[0.3em] text-sky-600">
                        Visual Builder Starter
                    </div>
                    <div className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
                        Schema-driven editing for a Wix-style page builder
                    </div>
                    <div className="mt-4 text-base leading-7 text-slate-600">
                        The starter includes an editor shell, recursive JSON
                        rendering, a simple inspector, viewport switching, and
                        image resize support backed by builder state.
                    </div>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href as Route}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 text-base font-medium text-slate-900 transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
