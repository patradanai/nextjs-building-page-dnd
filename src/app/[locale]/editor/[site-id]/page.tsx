import EditorPage from '@/modules/Builder/EditorPage'

export default async function EditorRoute({
    params,
}: {
    params: Promise<Record<string, string>>
}) {
    const routeParams = await params

    return <EditorPage siteId={routeParams['site-id']} />
}
