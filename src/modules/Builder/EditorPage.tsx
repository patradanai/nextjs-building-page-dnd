import { EditorShell } from '@/components/builder/EditorShell'

interface Props {
    siteId: string
}

const EditorPage = ({ siteId }: Props) => {
    return <EditorShell siteId={siteId} />
}

export default EditorPage
