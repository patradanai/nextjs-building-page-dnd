import { Block } from '@/types/site-builder'

const spacingClassBySize = {
    xs: 'h-2',
    sm: 'h-4',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16',
} as const

interface BlockRendererProps {
    block: Block
}

const BlockRenderer = ({ block }: BlockRendererProps) => {
    switch (block.type) {
        case 'heading': {
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
        case 'text': {
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
        case 'image':
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
        case 'button': {
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
        case 'nav': {
            const alignClass =
                block.props.align === 'center'
                    ? 'justify-center'
                    : block.props.align === 'right'
                      ? 'justify-end'
                      : 'justify-start'

            return (
                <nav>
                    <ul
                        className={`flex flex-wrap gap-4 text-sm ${alignClass}`}
                    >
                        {block.props.items.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    target={
                                        item.openInNewTab ? '_blank' : undefined
                                    }
                                    rel={
                                        item.openInNewTab
                                            ? 'noreferrer'
                                            : undefined
                                    }
                                    className="hover:opacity-80"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )
        }
        case 'spacer':
            return (
                <div
                    className={spacingClassBySize[block.props.size]}
                    aria-hidden="true"
                />
            )
        case 'product-list':
            return (
                <div className="space-y-4">
                    {block.props.title ? (
                        <h3 className="text-xl font-semibold">
                            {block.props.title}
                        </h3>
                    ) : null}
                    <div
                        className="grid gap-4"
                        style={{
                            gridTemplateColumns: `repeat(${block.props.columns ?? 3}, minmax(0, 1fr))`,
                        }}
                    >
                        {block.props.products.map((product) => (
                            <article
                                key={product.id}
                                className="rounded-md border border-black/10 p-4"
                            >
                                {product.imageUrl ? (
                                    <img
                                        src={product.imageUrl}
                                        alt={product.title}
                                        className="mb-3 h-40 w-full rounded object-cover"
                                    />
                                ) : null}
                                <h4 className="font-medium">{product.title}</h4>
                                {product.description ? (
                                    <p className="mt-1 text-sm opacity-80">
                                        {product.description}
                                    </p>
                                ) : null}
                                {product.price ? (
                                    <p className="mt-2 text-sm font-semibold">
                                        {product.price}
                                    </p>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            )
    }
}

export default BlockRenderer
