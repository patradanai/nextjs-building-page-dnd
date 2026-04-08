import { SpacerBlock as SpacerBlockModel } from '@/types/siteBuilder'

const spacingClassBySize = {
    xs: 'h-2',
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
} as const

interface Props {
    block: SpacerBlockModel
}

const SpacerBlock = ({ block }: Props) => {
    return (
        <div
            className={spacingClassBySize[block.props.size]}
            aria-hidden="true"
        />
    )
}

export default SpacerBlock
