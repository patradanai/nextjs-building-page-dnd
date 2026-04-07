'use client'
import { NextPage } from 'next'

import Button from '@/components/ui/Button/Button'
import Error from '@/components/ui/Errors'
import { useResource } from '@/hooks/useResource'

import FormContent from './components/FormContent'
import SlidebarStatus from './components/SlidebarStatus'

interface Props {
    id: string
}

const EditResourceModule: NextPage<Props> = ({ id }) => {
    const { data, isLoading, isError } = useResource(id)

    if (isError) {
        return <Error />
    }

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {/* Header */}
            <nav className="mb-5 p-5">
                <div className="flex w-full items-center justify-end gap-5">
                    <Button className="w-20 bg-blue-500 p-2 text-sm">
                        Save
                    </Button>
                    <Button className="w-20 bg-blue-500 p-2 text-sm">
                        Publish
                    </Button>
                </div>
            </nav>
            <div className="flex flex-row">
                <FormContent />
                <SlidebarStatus />
            </div>
        </div>
    )
}

export default EditResourceModule
