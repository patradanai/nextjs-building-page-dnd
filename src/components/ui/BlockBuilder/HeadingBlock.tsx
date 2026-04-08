import { HeadingBlock as HeadingBlockModel } from '@/types/siteBuilder'

interface Props {
    block: HeadingBlockModel
}

const HeadingBlock = ({ block }: Props) => {
    const HeadingTag = `h${block.props.level ?? 2}` as const
    const alignClass =
        block.props.align === 'center'
            ? 'text-center'
            : block.props.align === 'right'
              ? 'text-right'
              : 'text-left'

    return (
        <HeadingTag
            className={`font-semibold tracking-tight ${alignClass} ${
                (block.props.level ?? 2) <= 2 ? 'text-3xl' : 'text-xl'
            }`}
        >
            {block.props.text}
        </HeadingTag>
    )
}

export default HeadingBlock
