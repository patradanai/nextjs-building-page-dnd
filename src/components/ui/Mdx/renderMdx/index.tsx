'use client'
import { FC, useEffect, useState } from 'react'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import remarkBreak from 'remark-breaks'
import remarkGfm from 'remark-gfm'
// import remarkMdx from 'remark-mdx'
import remarkRehype from 'remark-rehype'

import { ImageLoader } from '@/components/ui/ImageLoader'
import { cn } from '@/utils/cn'

import { Heading } from '../mdx/Header'
import Paragraph from '../mdx/Paragraph'
import UnorderedList from '../mdx/UnorderedList'

interface Props {
    mdxSource: any
    className?: string
}

const components = {
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    p: Paragraph,
    ul: UnorderedList,
    image: ({ src, alt, ...props }: any) => {
        return (
            <ImageLoader
                src={src}
                alt={alt}
                width={300}
                height={300}
                style={{ objectFit: 'contain' }}
                {...props}
            />
        )
    },
}

const RenderMdx: FC<Props> = ({ mdxSource, className }) => {
    const [source, setSource] = useState<any>(null)
    useEffect(() => {
        if (!mdxSource) return

        serialize(
            mdxSource.replace(
                /<(br|hr|input|meta|img|link|param|area)>/g,
                '<$1 />'
            ),
            {
                // parseFrontmatter: true,
                mdxOptions: {
                    development: process.env.NODE_ENV === 'development',
                    remarkPlugins: [
                        remarkBreak,
                        remarkGfm,
                        [remarkRehype, { allowDangerousHtml: true }],
                        // remarkMdx,
                    ],
                    rehypePlugins: [
                        rehypeSlug,
                        [
                            rehypeExternalLinks,
                            { target: '_blank', rel: ['nofollow'] },
                        ],
                    ],
                },
            }
        ).then((res) => {
            setSource(res)
        })
    }, [mdxSource])

    if (!source) return <div className="text-center">Loading...</div>

    return (
        <div
            className={cn(
                'font-sarabun prose-headings:text-yellow-500 prose-ul:flex-col prose-h1:text-3xl md:prose-h1:text-5xl prose-h2:mt-5 prose prose-h2:mb-5 prose-p:my-0 prose-p:text-base prose-p:text-white prose-strong:text-[#FEC066] prose-img:mx-auto mb-5 max-w-none text-white',
                className
            )}
        >
            <MDXRemote {...source} components={components} />
        </div>
    )
}

export default RenderMdx
