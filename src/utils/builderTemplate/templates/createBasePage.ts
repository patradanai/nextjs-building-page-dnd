import { PageContent, PageModel, PageType } from '@/types/siteBuilder'

import {
    createDefaultPageSections,
    createSectionPreset,
} from '../sectionPresent'

const createPageContent = (pageType: PageType): PageContent => {
    if (pageType === 'home') {
        return {
            version: 1,
            sections: createDefaultPageSections(),
        }
    }

    return {
        version: 1,
        sections: [
            createSectionPreset('header'),
            createSectionPreset('single'),
            createSectionPreset('footer'),
        ],
    }
}

export const createBasePage = (input: {
    title: string
    slug: string
    pageType?: PageType
    siteId?: string
}): PageModel => {
    const pageType =
        input.pageType ?? (input.slug === '/' ? 'home' : 'standard')
    const now = new Date()
    const draftContent = createPageContent(pageType)

    return {
        id: crypto.randomUUID(),
        siteId: input.siteId,
        title: input.title,
        slug: input.slug,
        pageType,
        seo: null,
        draftContent,
        publishedContent: null,
        createdAt: now,
        updatedAt: now,
    }
}
