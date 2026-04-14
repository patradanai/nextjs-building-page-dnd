import { RenderNode } from '@/components/renderer/RenderNode'
import { BuilderNode } from '@/types/builder'

export const PublishedRenderer = ({ node }: { node: BuilderNode }) => {
    return (
        <main className="min-h-screen bg-white px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <RenderNode node={node} mode="published" />
            </div>
        </main>
    )
}
