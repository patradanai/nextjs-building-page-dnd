import { PublishedRenderer } from '@/components/renderer/PublishedRenderer'
import { getDefaultPageSchema } from '@/lib/builder/default-page-schema'

export default async function PublishedPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    await params

    return <PublishedRenderer node={getDefaultPageSchema()} />
}
