import { BuilderNode } from '@/types/builder'

export const mockFullPageSchema: BuilderNode = {
    id: 'page-root',
    type: 'page',
    children: [
        {
            id: 'hero-section',
            type: 'section',
            style: {
                backgroundColor: '#f8fafc',
            },
            children: [
                {
                    id: 'hero-kicker',
                    type: 'text',
                    content: {
                        text: 'VISUAL SITE BUILDER',
                    },
                    style: {
                        color: '#0f766e',
                        fontSize: 14,
                    },
                },
                {
                    id: 'hero-title',
                    type: 'text',
                    content: {
                        text: 'Design a polished website from structured blocks',
                    },
                    style: {
                        color: '#0f172a',
                        fontSize: 42,
                    },
                },
                {
                    id: 'hero-body',
                    type: 'text',
                    content: {
                        text: 'This full page is rendered from a mock builder schema so you can preview realistic editor output before wiring real persistence.',
                    },
                    style: {
                        color: '#475569',
                        fontSize: 18,
                    },
                },
                {
                    id: 'hero-button',
                    type: 'button',
                    content: {
                        label: 'Start Editing',
                        href: '/en/editor/demo-site',
                    },
                },
                {
                    id: 'hero-image',
                    type: 'image',
                    content: {
                        src: '/images/no-image.svg',
                        alt: 'Hero preview',
                    },
                    layout: {
                        width: 720,
                        height: 320,
                    },
                },
            ],
        },
        {
            id: 'features-section',
            type: 'section',
            style: {
                backgroundColor: '#ffffff',
            },
            children: [
                {
                    id: 'features-title',
                    type: 'text',
                    content: {
                        text: 'Everything you need to launch faster',
                    },
                    style: {
                        color: '#0f172a',
                        fontSize: 30,
                    },
                },
                {
                    id: 'feature-one',
                    type: 'text',
                    content: {
                        text: 'Section-based composition with recursive rendering from a single page tree.',
                    },
                    style: {
                        color: '#334155',
                        fontSize: 18,
                    },
                },
                {
                    id: 'feature-two',
                    type: 'text',
                    content: {
                        text: 'Editable text, buttons, and resizable image blocks backed by builder state.',
                    },
                    style: {
                        color: '#334155',
                        fontSize: 18,
                    },
                },
                {
                    id: 'feature-three',
                    type: 'text',
                    content: {
                        text: 'Separate editor and published modes using the same JSON schema.',
                    },
                    style: {
                        color: '#334155',
                        fontSize: 18,
                    },
                },
            ],
        },
        {
            id: 'story-section',
            type: 'section',
            style: {
                backgroundColor: '#ecfeff',
            },
            children: [
                {
                    id: 'story-title',
                    type: 'text',
                    content: {
                        text: 'Build a realistic page before connecting live data',
                    },
                    style: {
                        color: '#0f172a',
                        fontSize: 28,
                    },
                },
                {
                    id: 'story-copy',
                    type: 'text',
                    content: {
                        text: 'This mock schema gives you a richer preview target for published mode, drag-and-drop testing, and future section layout controls.',
                    },
                    style: {
                        color: '#475569',
                        fontSize: 18,
                    },
                },
                {
                    id: 'story-image',
                    type: 'image',
                    content: {
                        src: '/images/no-image.svg',
                        alt: 'Story section image',
                    },
                    layout: {
                        width: 640,
                        height: 260,
                    },
                },
            ],
        },
        {
            id: 'testimonial-section',
            type: 'section',
            style: {
                backgroundColor: '#fefce8',
            },
            children: [
                {
                    id: 'testimonial-title',
                    type: 'text',
                    content: {
                        text: 'What this mock proves',
                    },
                    style: {
                        color: '#0f172a',
                        fontSize: 28,
                    },
                },
                {
                    id: 'testimonial-quote-one',
                    type: 'text',
                    content: {
                        text: '"The recursive renderer is ready for larger page trees."',
                    },
                    style: {
                        color: '#334155',
                        fontSize: 18,
                    },
                },
                {
                    id: 'testimonial-quote-two',
                    type: 'text',
                    content: {
                        text: '"Published mode can already render multi-section landing pages from plain JSON."',
                    },
                    style: {
                        color: '#334155',
                        fontSize: 18,
                    },
                },
            ],
        },
        {
            id: 'cta-section',
            type: 'section',
            style: {
                backgroundColor: '#0f172a',
            },
            children: [
                {
                    id: 'cta-title',
                    type: 'text',
                    content: {
                        text: 'Ready to turn this into a real page builder?',
                    },
                    style: {
                        color: '#ffffff',
                        fontSize: 32,
                    },
                },
                {
                    id: 'cta-copy',
                    type: 'text',
                    content: {
                        text: 'The next feature is parent layout controls so sections can switch between stacked and row-based child flow.',
                    },
                    style: {
                        color: '#cbd5e1',
                        fontSize: 18,
                    },
                },
                {
                    id: 'cta-button',
                    type: 'button',
                    content: {
                        label: 'Open Builder',
                        href: '/en/editor/demo-site',
                    },
                },
            ],
        },
    ],
}
