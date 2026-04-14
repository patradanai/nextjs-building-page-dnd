import { EditorShell } from '@/components/builder/EditorShell'

export default async function EditorPage({
    params,
}: {
    params: Promise<Record<string, string>>
}) {
    const routeParams = await params

    return <EditorShell siteId={routeParams['site-id']} />
}
