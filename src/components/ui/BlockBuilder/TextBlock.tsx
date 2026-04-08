import { TextBlock as TextBlockModel } from '@/types/siteBuilder'

interface Props {
    block: TextBlockModel
}

const TextBlock = ({ block }: Props) => {
    const alignClass =
        block.props.align === 'center'
            ? 'text-center'
            : block.props.align === 'right'
              ? 'text-right'
              : 'text-left'

    return (
        <p className={`text-base leading-7 ${alignClass}`}>
            {block.props.text}
        </p>
    )
}

export default TextBlock
