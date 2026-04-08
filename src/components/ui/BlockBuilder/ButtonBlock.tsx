import { ButtonBlock as ButtonBlockModel } from '@/types/siteBuilder'

interface Props {
    block: ButtonBlockModel
}

const ButtonBlock = ({ block }: Props) => {
    const variantClass =
        block.props.variant === 'secondary'
            ? 'bg-white text-black border border-black/20'
            : block.props.variant === 'ghost'
              ? 'bg-transparent text-current border border-current/30'
              : 'bg-black text-white'

    return (
        <a
            href={block.props.href}
            className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium ${variantClass}`}
            target={block.props.openInNewTab ? '_blank' : undefined}
            rel={block.props.openInNewTab ? 'noreferrer' : undefined}
        >
            {block.props.label}
        </a>
    )
}

export default ButtonBlock
