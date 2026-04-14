import PublishedPage from '@/modules/Builder/PublishedPage'

export default async function PublishedRoute({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    await params

    return <PublishedPage />
}
