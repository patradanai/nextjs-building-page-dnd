import { ImageBlock as ImageBlockModel } from '@/types/siteBuilder'

interface Props {
    block: ImageBlockModel
}

const ImageBlock = ({ block }: Props) => {
    return (
        <img
            src={block.props.src}
            alt={block.props.alt}
            className="w-full rounded-lg"
            width={block.props.width}
            height={block.props.height}
            style={{ objectFit: block.props.objectFit ?? 'cover' }}
        />
    )
}

export default ImageBlock
