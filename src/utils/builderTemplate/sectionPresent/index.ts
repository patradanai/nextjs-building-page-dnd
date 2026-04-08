import {
    Block,
    NavigationItem,
    Region,
    Section,
    SectionType,
} from '@/types/siteBuilder'

const createNavItems = (): NavigationItem[] => [
    { id: crypto.randomUUID(), label: 'Home', href: '/' },
    { id: crypto.randomUUID(), label: 'About', href: '/about' },
    { id: crypto.randomUUID(), label: 'Contact', href: '/contact' },
]

const createRegion = (label: string, blocks: Block[]): Region => ({
    id: crypto.randomUUID(),
    label,
    blocks,
})

export const SECTION_PRESET_TYPES: SectionType[] = [
    'header',
    'hero',
    'single',
    'two-column',
    'gallery',
    'features',
    'cta',
    'footer',
]

const createHeaderSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'header',
    label: 'Header',
    settings: {
        maxWidth: '7xl',
        paddingY: 'sm',
        backgroundColor: 'var(--builder-bg, #ffffff)',
    },
    regions: [
        createRegion('brand', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Brand Title',
                props: { text: 'Your Brand', level: 3 },
            },
        ]),
        createRegion('navigation', [
            {
                id: crypto.randomUUID(),
                type: 'nav',
                label: 'Main Navigation',
                props: { items: createNavItems(), align: 'right' },
            },
        ]),
    ],
})

const createHeroSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'hero',
    label: 'Hero',
    settings: {
        maxWidth: '7xl',
        paddingY: 'lg',
        backgroundColor: '#f8fafc',
    },
    regions: [
        createRegion('content', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Hero Heading',
                props: { text: 'Build your next site in minutes', level: 1 },
            },
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Hero Text',
                props: {
                    text: 'Launch quickly with reusable sections and a clean editing flow.',
                },
            },
            {
                id: crypto.randomUUID(),
                type: 'button',
                label: 'Primary CTA',
                props: { label: 'Get Started', href: '#', variant: 'primary' },
            },
        ]),
        createRegion('media', [
            {
                id: crypto.randomUUID(),
                type: 'image',
                label: 'Hero Image',
                props: {
                    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
                    alt: 'Hero image',
                    objectFit: 'cover',
                },
            },
        ]),
    ],
})

const createSingleSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'single',
    label: 'Single Column',
    settings: {
        maxWidth: '5xl',
        paddingY: 'md',
    },
    regions: [
        createRegion('main', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Section Heading',
                props: { text: 'Tell your story', level: 2 },
            },
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Section Body',
                props: {
                    text: 'Use this section for a clear single-column message block.',
                },
            },
        ]),
    ],
})

const createTwoColumnSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'two-column',
    label: 'Two Column',
    settings: {
        maxWidth: '7xl',
        paddingY: 'md',
    },
    regions: [
        createRegion('left', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Left Heading',
                props: { text: 'Left Column', level: 3 },
            },
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Left Text',
                props: { text: 'Add text, media, or product details here.' },
            },
        ]),
        createRegion('right', [
            {
                id: crypto.randomUUID(),
                type: 'image',
                label: 'Right Image',
                props: {
                    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
                    alt: 'Feature image',
                },
            },
        ]),
    ],
})

const createGallerySection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'gallery',
    label: 'Gallery',
    settings: {
        maxWidth: '7xl',
        paddingY: 'md',
    },
    regions: [
        createRegion('gallery', [
            {
                id: crypto.randomUUID(),
                type: 'image',
                label: 'Gallery Image 1',
                props: {
                    src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
                    alt: 'Gallery image 1',
                },
            },
            {
                id: crypto.randomUUID(),
                type: 'image',
                label: 'Gallery Image 2',
                props: {
                    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80',
                    alt: 'Gallery image 2',
                },
            },
            {
                id: crypto.randomUUID(),
                type: 'image',
                label: 'Gallery Image 3',
                props: {
                    src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
                    alt: 'Gallery image 3',
                },
            },
        ]),
    ],
})

const createFeaturesSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'features',
    label: 'Features',
    settings: {
        maxWidth: '7xl',
        paddingY: 'md',
    },
    regions: [
        createRegion('intro', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Features Heading',
                props: {
                    text: 'Why customers choose us',
                    level: 2,
                    align: 'center',
                },
            },
        ]),
        createRegion('items', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Feature 1',
                props: { text: 'Fast setup', level: 4 },
            },
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Feature 1 Text',
                props: {
                    text: 'Launch an editable site quickly with reusable sections.',
                },
            },
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Feature 2',
                props: { text: 'Structured editing', level: 4 },
            },
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Feature 2 Text',
                props: {
                    text: 'Section and block editing keeps layout consistent.',
                },
            },
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'Feature 3',
                props: { text: 'Publish when ready', level: 4 },
            },
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Feature 3 Text',
                props: { text: 'Draft and published content stay isolated.' },
            },
        ]),
    ],
})

const createCtaSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'cta',
    label: 'Call To Action',
    settings: {
        maxWidth: '5xl',
        paddingY: 'md',
        backgroundColor: '#111827',
        textColor: '#ffffff',
    },
    regions: [
        createRegion('content', [
            {
                id: crypto.randomUUID(),
                type: 'heading',
                label: 'CTA Heading',
                props: {
                    text: 'Ready to publish your site?',
                    level: 2,
                    align: 'center',
                },
            },
            {
                id: crypto.randomUUID(),
                type: 'button',
                label: 'CTA Button',
                props: {
                    label: 'Publish now',
                    href: '#',
                    variant: 'secondary',
                },
            },
        ]),
    ],
})

const createFooterSection = (): Section => ({
    id: crypto.randomUUID(),
    type: 'footer',
    label: 'Footer',
    settings: {
        maxWidth: '7xl',
        paddingY: 'sm',
        backgroundColor: '#0f172a',
        textColor: '#ffffff',
    },
    regions: [
        createRegion('footer-content', [
            {
                id: crypto.randomUUID(),
                type: 'text',
                label: 'Copyright Text',
                props: { text: '© 2026 Your Brand. All rights reserved.' },
            },
            {
                id: crypto.randomUUID(),
                type: 'nav',
                label: 'Footer Navigation',
                props: { items: createNavItems(), align: 'right' },
            },
        ]),
    ],
})

export const createSectionPreset = (sectionType: SectionType): Section => {
    switch (sectionType) {
        case 'header':
            return createHeaderSection()
        case 'hero':
            return createHeroSection()
        case 'single':
            return createSingleSection()
        case 'two-column':
            return createTwoColumnSection()
        case 'gallery':
            return createGallerySection()
        case 'features':
            return createFeaturesSection()
        case 'cta':
            return createCtaSection()
        case 'footer':
            return createFooterSection()
    }
}

export const createDefaultPageSections = (): Section[] => [
    createSectionPreset('header'),
    createSectionPreset('hero'),
    createSectionPreset('features'),
    createSectionPreset('cta'),
    createSectionPreset('footer'),
]
