import { useRef, useState } from 'react'

import dynamic from 'next/dynamic'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import Accordion from '@/components/ui/Accordian'
import Container from '@/components/ui/Container/Container'
import FormImageUpload from '@/components/ui/FormHook/FormImageUpload'
import FormInput from '@/components/ui/FormHook/FormInput'
import FormInputArea from '@/components/ui/FormHook/FormInputArea'
import FormInputSwitch from '@/components/ui/FormHook/FormInputSwitch'
import FormSelection from '@/components/ui/FormHook/FormSelection'
import { RichTextEditorHandle } from '@/components/ui/RichTextEditor'

import { ContentSchema, IContentFormData } from './schema'

const RichTextEditor = dynamic(() => import('@/components/ui/RichTextEditor'), {
    ssr: false,
})

const FormContent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: zodResolver(ContentSchema),
    })

    const editorRef = useRef<RichTextEditorHandle>(null) // Ref for RichTextEditor
    const [editorContent, setEditorContent] = useState<string>('') // State to store the editor content

    const handleGetContent = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent() // Get the editor content
            setEditorContent(content) // Update the state with the content
        }
    }

    const onSubmit: SubmitHandler<IContentFormData> = (data) => {
        console.log(data)
    }

    return (
        <Container className="p-5">
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <FormInput
                    {...register('title')}
                    label="Title"
                    required
                    errors={errors.title}
                />
                <FormInputArea
                    {...register('title')}
                    label="Description"
                    errors={errors.description}
                />

                <FormSelection label="Category">
                    <FormSelection.Option value="1">One</FormSelection.Option>
                    <FormSelection.Option value="2">Two</FormSelection.Option>
                    <FormSelection.Option value="3">Three</FormSelection.Option>
                </FormSelection>

                <FormInput
                    {...register('domain')}
                    label="Domain"
                    required
                    errors={errors.title}
                />

                <FormInput
                    {...register('blogId')}
                    label="Blog ID"
                    required
                    errors={errors.title}
                />
                <Accordion>
                    <Accordion.Item id="metaDescription">
                        <Accordion.Header>Meta Description</Accordion.Header>
                        <Accordion.Content>
                            <FormInput
                                {...register('metaDescription.title')}
                                label="Title"
                                required
                                errors={errors.title}
                            />
                            <FormInputArea
                                {...register('metaDescription.title')}
                                label="Description"
                                errors={errors.description}
                            />
                            <FormInputSwitch
                                {...register('metaDescription.isFollow')}
                                label="isFollow"
                            />
                            <FormInputSwitch
                                {...register('metaDescription.isIndex')}
                                label="isIndex"
                            />
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion>

                <FormImageUpload
                    {...register('image')}
                    label="Image"
                    control={control}
                />

                <div>
                    <RichTextEditor
                        name="content"
                        required
                        label="Content"
                        ref={editorRef}
                    />
                </div>
                {/* <button
                    onClick={handleGetContent}
                    className="mt-4 flex rounded bg-blue-500 px-4 py-2 text-white"
                >
                    Show Content
                </button>
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Editor Content:</h2>
                    <div
                        className="rounded border bg-gray-50 p-4"
                        dangerouslySetInnerHTML={{ __html: editorContent }}
                    />
                </div> */}
            </form>
        </Container>
    )
}

export default FormContent
