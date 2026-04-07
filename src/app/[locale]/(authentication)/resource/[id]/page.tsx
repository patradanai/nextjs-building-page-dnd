import EditResourceModule from '@/modules/Resource/Edit'

const UpdateResourcePage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params

    return (
        <>
            <EditResourceModule id={id} />
        </>
    )
}

export default UpdateResourcePage
