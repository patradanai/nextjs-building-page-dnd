import Image from 'next/image'

import { BuilderNode } from '@/types/builder'

export const ImageBlock = ({ node }: { node: BuilderNode }) => {
    const width = node.layout?.width ?? 320
    const height = node.layout?.height ?? 180

    return (
        <Image
            src={node.content?.src ?? '/images/no-image.svg'}
            alt={node.content?.alt ?? 'Image block'}
            className="block rounded-xl border border-slate-200 bg-slate-100 object-cover"
            width={width}
            height={height}
            style={{ width, height }}
        />
    )
}
