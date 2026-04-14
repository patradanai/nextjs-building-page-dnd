import { ButtonBlock } from '@/components/blocks/ButtonBlock'
import { ImageBlock } from '@/components/blocks/ImageBlock'
import { SectionBlock } from '@/components/blocks/SectionBlock'
import { TextBlock } from '@/components/blocks/TextBlock'
import { EditableNodeFrame } from '@/components/builder/EditableNodeFrame'
import { ResizableWrapper } from '@/components/builder/ResizableWrapper'
import { BuilderNode } from '@/types/builder'

interface RenderNodeProps {
    node: BuilderNode
    mode: 'editor' | 'published'
}

const wrapForEditor = (node: BuilderNode, content: React.ReactNode) => {
    if (node.type === 'page') {
        return content
    }

    return <EditableNodeFrame nodeId={node.id}>{content}</EditableNodeFrame>
}

export const RenderNode = ({ node, mode }: RenderNodeProps) => {
    if (node.type === 'page') {
        const pageContent = (
            <div className="space-y-6">
                {(node.children ?? []).map((child) => (
                    <RenderNode key={child.id} node={child} mode={mode} />
                ))}
            </div>
        )

        return mode === 'editor'
            ? wrapForEditor(node, pageContent)
            : pageContent
    }

    if (node.type === 'section') {
        const sectionContent = (
            <SectionBlock node={node}>
                {(node.children ?? []).map((child) => (
                    <RenderNode key={child.id} node={child} mode={mode} />
                ))}
            </SectionBlock>
        )

        return mode === 'editor'
            ? wrapForEditor(node, sectionContent)
            : sectionContent
    }

    if (node.type === 'text') {
        const textContent = <TextBlock node={node} />

        return mode === 'editor'
            ? wrapForEditor(node, textContent)
            : textContent
    }

    if (node.type === 'button') {
        const buttonContent = <ButtonBlock node={node} mode={mode} />

        return mode === 'editor'
            ? wrapForEditor(node, buttonContent)
            : buttonContent
    }

    const imageContent =
        mode === 'editor' ? (
            <ResizableWrapper
                nodeId={node.id}
                width={node.layout?.width ?? 320}
                height={node.layout?.height ?? 180}
            >
                <ImageBlock node={node} />
            </ResizableWrapper>
        ) : (
            <ImageBlock node={node} />
        )

    return mode === 'editor' ? wrapForEditor(node, imageContent) : imageContent
}
