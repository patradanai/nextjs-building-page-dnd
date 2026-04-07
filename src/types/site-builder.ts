export type PageType = 'home' | 'standard' | 'menu' | 'products' | 'contact'

export type SectionType =
    | 'header'
    | 'hero'
    | 'single'
    | 'two-column'
    | 'gallery'
    | 'features'
    | 'cta'
    | 'footer'

export type BlockType =
    | 'heading'
    | 'text'
    | 'image'
    | 'button'
    | 'nav'
    | 'spacer'
    | 'product-list'

export interface ThemeConfig {
    mode?: 'light' | 'dark'
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    fontHeading?: string
    fontBody?: string
}

export interface BrandingConfig {
    logoUrl?: string
    logoAlt?: string
    siteTitle?: string
    tagline?: string
    faviconUrl?: string
}

export interface NavigationItem {
    id: string
    label: string
    href: string
    openInNewTab?: boolean
}

interface BlockBase<TType extends BlockType, TProps extends object> {
    id: string
    type: TType
    label: string
    props: TProps
}

export type HeadingBlock = BlockBase<
    'heading',
    {
        text: string
        level?: 1 | 2 | 3 | 4 | 5 | 6
        align?: 'left' | 'center' | 'right'
    }
>

export type TextBlock = BlockBase<
    'text',
    {
        text: string
        align?: 'left' | 'center' | 'right'
    }
>

export type ImageBlock = BlockBase<
    'image',
    {
        src: string
        alt: string
        width?: number
        height?: number
        objectFit?: 'cover' | 'contain'
    }
>

export type ButtonBlock = BlockBase<
    'button',
    {
        label: string
        href: string
        variant?: 'primary' | 'secondary' | 'ghost'
        openInNewTab?: boolean
    }
>

export type NavBlock = BlockBase<
    'nav',
    {
        items: NavigationItem[]
        align?: 'left' | 'center' | 'right'
    }
>

export type SpacerBlock = BlockBase<
    'spacer',
    {
        size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }
>

export interface ProductListItem {
    id: string
    title: string
    description?: string
    imageUrl?: string
    price?: string
}

export type ProductListBlock = BlockBase<
    'product-list',
    {
        title?: string
        columns?: 1 | 2 | 3 | 4
        products: ProductListItem[]
    }
>

export type Block =
    | HeadingBlock
    | TextBlock
    | ImageBlock
    | ButtonBlock
    | NavBlock
    | SpacerBlock
    | ProductListBlock

export interface Region {
    id: string
    label: string
    blocks: Block[]
}

export interface SectionSettings {
    containerClassName?: string
    backgroundColor?: string
    textColor?: string
    maxWidth?: 'full' | '7xl' | '5xl' | '3xl'
    paddingY?: 'none' | 'sm' | 'md' | 'lg'
    [key: string]: unknown
}

export interface Section {
    id: string
    type: SectionType
    label: string
    settings: SectionSettings
    regions: Region[]
}

export interface PageContent {
    version: number
    sections: Section[]
}

export interface PageModel {
    id: string
    siteId?: string
    title: string
    slug: string
    pageType: PageType
    seo?: Record<string, unknown> | null
    draftContent: PageContent
    publishedContent?: PageContent | null
    createdAt?: Date
    updatedAt?: Date
}

export interface SiteModel {
    id: string
    name: string
    subdomain: string
    ownerUserId?: string
    branding?: BrandingConfig | null
    theme?: ThemeConfig | null
    navigation?: NavigationItem[] | null
    pages: PageModel[]
    createdAt?: Date
    updatedAt?: Date
}

export interface TemplatePreset {
    id: string
    name: string
    description: string
    createSite: (input?: {
        siteName?: string
        subdomain?: string
        ownerUserId?: string
    }) => SiteModel
}
