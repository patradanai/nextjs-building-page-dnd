import { BuilderNode, BuilderNodeType } from '@/types/builder'

const createId = (type: BuilderNodeType) =>
    `${type}-${Math.random().toString(36).slice(2, 8)}`

export const createDefaultNode = (
    type: Exclude<BuilderNodeType, 'page'>
): BuilderNode => {
    if (type === 'section') {
        return {
            id: createId(type),
            type,
            style: {
                backgroundColor: '#ffffff',
            },
            children: [],
        }
    }

    if (type === 'text') {
        return {
            id: createId(type),
            type,
            content: {
                text: 'New text block',
            },
            style: {
                color: '#0f172a',
                fontSize: 18,
            },
        }
    }

    if (type === 'button') {
        return {
            id: createId(type),
            type,
            content: {
                label: 'Button',
                href: '#',
            },
        }
    }

    return {
        id: createId(type),
        type,
        content: {
            src: '/images/no-image.svg',
            alt: 'Placeholder image',
        },
        layout: {
            width: 320,
            height: 180,
        },
    }
}

export const getDefaultPageSchema = (): BuilderNode => ({
    id: 'page-root',
    type: 'page',
    children: [
        {
            id: 'section-root',
            type: 'section',
            style: {
                backgroundColor: '#ffffff',
            },
            children: [
                {
                    id: 'text-heading',
                    type: 'text',
                    content: {
                        text: 'Build and edit your homepage visually',
                    },
                    style: {
                        color: '#0f172a',
                        fontSize: 36,
                    },
                },
                {
                    id: 'text-body',
                    type: 'text',
                    content: {
                        text: 'This starter renders page content from a JSON tree and keeps editor UI separate from published output.',
                    },
                    style: {
                        color: '#475569',
                        fontSize: 18,
                    },
                },
                {
                    id: 'button-hero',
                    type: 'button',
                    content: {
                        label: 'Get started',
                        href: '#',
                    },
                },
                {
                    id: 'image-hero',
                    type: 'image',
                    content: {
                        src: '/images/no-image.svg',
                        alt: 'Starter placeholder',
                    },
                    layout: {
                        width: 420,
                        height: 240,
                    },
                },
            ],
        },
    ],
})
