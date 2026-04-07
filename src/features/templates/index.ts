import { createBasePage } from '@/features/builder/create-base-page'
import {
    SiteModel,
    TemplatePreset,
    ThemeConfig,
    BrandingConfig,
} from '@/types/site-builder'

const createBaseTheme = (): ThemeConfig => ({
    mode: 'light',
    primaryColor: '#111827',
    secondaryColor: '#1d4ed8',
    accentColor: '#f59e0b',
    backgroundColor: '#ffffff',
    textColor: '#111827',
    radius: 'md',
    fontHeading: 'Kanit',
    fontBody: 'Bai Jamjuree',
})

const createBaseBranding = (siteName: string): BrandingConfig => ({
    siteTitle: siteName,
    tagline: 'Built with a reusable section-based builder',
})

const createStarterSite = (input?: {
    siteName?: string
    subdomain?: string
    ownerUserId?: string
}): SiteModel => {
    const name = input?.siteName ?? 'My Site'
    const subdomain = input?.subdomain ?? 'my-site'
    const now = new Date()
    const siteId = crypto.randomUUID()

    return {
        id: siteId,
        name,
        subdomain,
        ownerUserId: input?.ownerUserId,
        branding: createBaseBranding(name),
        theme: createBaseTheme(),
        navigation: [
            { id: crypto.randomUUID(), label: 'Home', href: '/' },
            { id: crypto.randomUUID(), label: 'About', href: '/about' },
            { id: crypto.randomUUID(), label: 'Contact', href: '/contact' },
        ],
        pages: [
            createBasePage({
                title: 'Home',
                slug: '/',
                pageType: 'home',
                siteId,
            }),
            createBasePage({
                title: 'About',
                slug: '/about',
                pageType: 'standard',
                siteId,
            }),
        ],
        createdAt: now,
        updatedAt: now,
    }
}

const createRestaurantSite = (input?: {
    siteName?: string
    subdomain?: string
    ownerUserId?: string
}): SiteModel => {
    const name = input?.siteName ?? 'Oak & Ember'
    const subdomain = input?.subdomain ?? 'oak-ember'
    const site = createStarterSite({
        siteName: name,
        subdomain,
        ownerUserId: input?.ownerUserId,
    })

    return {
        ...site,
        branding: {
            ...site.branding,
            tagline: 'Neighborhood dining, seasonal ingredients',
        },
        theme: {
            ...site.theme,
            primaryColor: '#2d1b13',
            secondaryColor: '#9a3412',
            accentColor: '#d97706',
        },
    }
}

export const templatePresets: TemplatePreset[] = [
    {
        id: 'starter',
        name: 'Starter',
        description: 'General purpose template with reusable core sections.',
        createSite: createStarterSite,
    },
    {
        id: 'restaurant',
        name: 'Restaurant',
        description:
            'Restaurant-oriented branding built on the same shared schema.',
        createSite: createRestaurantSite,
    },
]

export const getTemplatePreset = (templateId: string): TemplatePreset | null =>
    templatePresets.find((template) => template.id === templateId) ?? null

export const createSiteFromTemplate = (
    templateId: string,
    input?: {
        siteName?: string
        subdomain?: string
        ownerUserId?: string
    }
): SiteModel => {
    const template = getTemplatePreset(templateId) ?? templatePresets[0]
    return template.createSite(input)
}
