'use client'

import React, {
    useEffect,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react'

import Quill from 'quill'

// Define the ref type for the RichTextEditor component
export type RichTextEditorHandle = {
    getContent: () => string
}

type RichTextEditorProps = {
    name: string
    label?: string
    required?: boolean
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
    ({ name, label, required = false }, ref) => {
        const editorRef = useRef<HTMLDivElement>(null)
        const quillRef = useRef<Quill | null>(null)

        useEffect(() => {
            // Only initialize Quill if it hasn't been initialized yet
            if (editorRef.current) {
                // Create a unique ID for the editor
                const editorId = `quill-editor-${Date.now()}`
                editorRef.current.id = editorId

                // Initialize Quill
                quillRef.current = new Quill(`#${editorId}`, {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, 3, false] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            [{ list: 'ordered' }, { list: 'bullet' }],
                            ['link', 'image'],
                            ['clean'],
                        ],
                    },
                    placeholder: 'Write something...',
                })
            }

            return () => {
                // Proper cleanup
                if (quillRef.current) {
                    // Get the toolbar element associated with this editor
                    const toolbar = document.querySelector('.ql-toolbar')
                    if (toolbar) {
                        toolbar.remove()
                    }
                    quillRef.current = null
                }
            }
        }, [])

        // Expose the getContent function to the parent component
        useImperativeHandle(ref, () => ({
            getContent: () => {
                if (quillRef.current) {
                    return quillRef.current.root.innerHTML // Return the HTML content
                }
                return ''
            },
        }))

        return (
            <div>
                <label
                    className={`text-sm ${
                        required
                            ? 'after:text-[#FF0000] after:content-["*"]'
                            : ''
                    }`}
                    htmlFor={name}
                >
                    {label}
                </label>
                <div
                    ref={editorRef}
                    style={{ height: '300px', background: '#fff' }}
                />
            </div>
        )
    }
)

RichTextEditor.displayName = 'RichTextEditor'
export default RichTextEditor
