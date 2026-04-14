import { BuilderNode } from '@/types/builder'

export const SectionBlock = ({
    node,
    children,
}: {
    node: BuilderNode
    children?: React.ReactNode
}) => {
    return (
        <section
            className="space-y-4 rounded-2xl border border-slate-200 px-6 py-8"
            style={{
                backgroundColor: node.style?.backgroundColor ?? '#ffffff',
            }}
        >
            {children}
        </section>
    )
}
