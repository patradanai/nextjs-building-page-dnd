import { ProductListBlock as ProductListBlockModel } from '@/types/siteBuilder'

interface Props {
    block: ProductListBlockModel
}

const ProductListBlock = ({ block }: Props) => {
    return (
        <div className="space-y-4">
            {block.props.title ? (
                <h3 className="text-xl font-semibold">{block.props.title}</h3>
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

export default ProductListBlock
