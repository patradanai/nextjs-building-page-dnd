import { FC } from 'react'

import { PageContent, PageModel, SiteModel } from '@/types/siteBuilder'

import SectionRenderer from './SectionRenderer'

interface SiteRendererProps {
    site: Pick<SiteModel, 'name' | 'theme' | 'branding' | 'navigation'>
    page: Pick<
        PageModel,
        'title' | 'slug' | 'draftContent' | 'publishedContent'
    >
    content?: PageContent
    mode?: 'draft' | 'published'
}

const SiteRenderer: FC<SiteRendererProps> = ({
    site,
    page,
    content,
    mode = 'published',
}) => {
    const resolvedContent =
        content ??
        (mode === 'draft'
            ? page.draftContent
            : (page.publishedContent ?? page.draftContent))

    const theme = site.theme ?? {}
    const branding = site.branding ?? {}

    return (
        <main
            data-site-renderer="true"
            data-page-slug={page.slug}
            style={{
                backgroundColor: theme.backgroundColor ?? '#ffffff',
                color: theme.textColor ?? '#111827',
                fontFamily: theme.fontBody ?? 'system-ui, sans-serif',
            }}
        >
            <div className="sr-only">
                <h1>{branding.siteTitle ?? site.name}</h1>
                <p>{page.title}</p>
            </div>

            {resolvedContent.sections.map((section) => (
                <SectionRenderer key={section.id} section={section} />
            ))}
        </main>
    )
}

export default SiteRenderer
