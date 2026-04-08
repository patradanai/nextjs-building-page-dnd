import { FC } from 'react'

import {
    ButtonBlock,
    HeadingBlock,
    ImageBlock,
    NavBlock,
    ProductListBlock,
    SpacerBlock,
    TextBlock,
} from '@/components/ui/BlockBuilder'
import { Block } from '@/types/siteBuilder'

interface BlockRendererProps {
    block: Block
}

const BlockRenderer: FC<BlockRendererProps> = ({ block }) => {
    switch (block.type) {
        case 'heading':
            return <HeadingBlock block={block} />
        case 'text':
            return <TextBlock block={block} />
        case 'image':
            return <ImageBlock block={block} />
        case 'button':
            return <ButtonBlock block={block} />
        case 'nav':
            return <NavBlock block={block} />
        case 'spacer':
            return <SpacerBlock block={block} />
        case 'product-list':
            return <ProductListBlock block={block} />
    }
}

export default BlockRenderer
