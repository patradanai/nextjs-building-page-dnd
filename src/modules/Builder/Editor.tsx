import React from 'react'

import { NextPage } from 'next'

import SiteRenderer from '@/components/renderer/SiteRenderer'
import { PageModel, SiteModel } from '@/types/siteBuilder'

interface Props {
    mode: 'published' | 'draft'
    page: PageModel
    site: SiteModel
}

const EditorModule: NextPage<Props> = ({ mode, page, site }) => {
    return (
        <div>
            <SiteRenderer
                site={site}
                page={page}
                content={page.publishedContent ?? page.draftContent}
                mode={mode}
            />
        </div>
    )
}

export default EditorModule
