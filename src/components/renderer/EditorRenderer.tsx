'use client'

import { RenderNode } from '@/components/renderer/RenderNode'
import { BuilderNode } from '@/types/builder'

export const EditorRenderer = ({ node }: { node: BuilderNode }) => {
    return <RenderNode node={node} mode="editor" />
}
