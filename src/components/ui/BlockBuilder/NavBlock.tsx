import { NavBlock as NavBlockModel } from '@/types/siteBuilder'

interface Props {
    block: NavBlockModel
}

const NavBlock = ({ block }: Props) => {
    const alignClass =
        block.props.align === 'center'
            ? 'justify-center'
            : block.props.align === 'right'
              ? 'justify-end'
              : 'justify-start'

    return (
        <nav>
            <ul className={`flex flex-wrap gap-4 text-sm ${alignClass}`}>
                {block.props.items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            target={item.openInNewTab ? '_blank' : undefined}
                            rel={item.openInNewTab ? 'noreferrer' : undefined}
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

export default NavBlock
