import { BuilderNode } from '@/types/builder'

export const TextBlock = ({ node }: { node: BuilderNode }) => {
    const fontSize = node.style?.fontSize ?? 18
    const textColor = node.style?.color ?? '#0f172a'

    return (
        <div
            className="whitespace-pre-wrap leading-relaxed"
            style={{
                color: textColor,
                fontSize,
            }}
        >
            {node.content?.text ?? 'Text block'}
        </div>
    )
}
