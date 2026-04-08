import SiteRenderer from '@/components/renderer/SiteRenderer'
import { createSiteFromTemplate } from '@/utils/builderTemplate/templates'

const normalizeSlug = (slug: string[] | undefined): string => {
    if (!slug || slug.length === 0) {
        return '/'
    }

    return `/${slug.join('/')}`
}

const PublicSubdomainPage = async ({
    params,
}: {
    params: Promise<{ subdomain: string; slug?: string[] }>
}) => {
    const { subdomain, slug } = await params
    const currentSlug = normalizeSlug(slug)

    const site = createSiteFromTemplate('starter', {
        siteName: subdomain,
        subdomain,
    })

    const page =
        site.pages.find((sitePage) => sitePage.slug === currentSlug) ??
        site.pages.find((sitePage) => sitePage.slug === '/')

    if (!page) {
        return <div className="p-8">No page found for this site.</div>
    }

    return (
        <SiteRenderer
            site={site}
            page={page}
            content={page.publishedContent ?? page.draftContent}
            mode="published"
        />
    )
}

export default PublicSubdomainPage
