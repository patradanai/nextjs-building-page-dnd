import PreviewPage from '@/modules/Builder/PreviewPage'

export default function PreviewRoute({
    params,
}: {
    params: Record<string, string>
}) {
    return <PreviewPage siteId={params['site-id']} />
}
