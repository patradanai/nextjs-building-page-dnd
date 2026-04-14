import { PublishedRenderer } from '@/components/renderer/PublishedRenderer'
import { mockFullPageSchema } from '@/lib/builder/mockFullPageSchema'

const PublishedPage = () => {
    return <PublishedRenderer node={mockFullPageSchema} />
}

export default PublishedPage
