/* eslint-disable @typescript-eslint/naming-convention */
import { Region, Section } from '@/types/site-builder'

import BlockRenderer from './BlockRenderer'

const widthClassByValue = {
    full: 'max-w-none',
    '7xl': 'max-w-7xl',
    '5xl': 'max-w-5xl',
    '3xl': 'max-w-3xl',
} as const

const paddingYClassByValue = {
    none: 'py-0',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-20',
} as const

interface SectionRendererProps {
    section: Section
}

const renderRegion = (region: Region, className?: string) => (
    <div key={region.id} className={className}>
        {region.blocks.map((block) => (
            <div key={block.id} className="mb-4 last:mb-0">
                <BlockRenderer block={block} />
            </div>
        ))}
    </div>
)

const SectionRenderer = ({ section }: SectionRendererProps) => {
    const containerClass = widthClassByValue[section.settings.maxWidth ?? '7xl']
    const paddingYClass =
        paddingYClassByValue[section.settings.paddingY ?? 'md']

    return (
        <section
            data-section-id={section.id}
            data-section-type={section.type}
            className={`${paddingYClass} ${section.settings.containerClassName ?? ''}`}
            style={{
                backgroundColor: section.settings.backgroundColor,
                color: section.settings.textColor,
            }}
        >
            <div className={`mx-auto px-4 ${containerClass}`}>
                {section.type === 'header' ? (
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {section.regions.map((region) => renderRegion(region))}
                    </div>
                ) : null}

                {section.type === 'hero' ? (
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                        {section.regions.map((region) =>
                            renderRegion(
                                region,
                                region.label === 'media'
                                    ? 'min-h-48'
                                    : undefined
                            )
                        )}
                    </div>
                ) : null}

                {section.type === 'single' ? (
                    <div className="space-y-4">
                        {section.regions.map((region) => renderRegion(region))}
                    </div>
                ) : null}

                {section.type === 'two-column' ? (
                    <div className="grid gap-8 md:grid-cols-2">
                        {section.regions.map((region) => renderRegion(region))}
                    </div>
                ) : null}

                {section.type === 'gallery' ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {section.regions.flatMap((region) =>
                            region.blocks.map((block) => (
                                <div
                                    key={block.id}
                                    className="overflow-hidden rounded-lg"
                                >
                                    <BlockRenderer block={block} />
                                </div>
                            ))
                        )}
                    </div>
                ) : null}

                {section.type === 'features' ? (
                    <div className="space-y-8">
                        {section.regions.map((region) =>
                            renderRegion(
                                region,
                                region.label === 'items'
                                    ? 'grid gap-4 md:grid-cols-3'
                                    : undefined
                            )
                        )}
                    </div>
                ) : null}

                {section.type === 'cta' ? (
                    <div className="space-y-4 text-center">
                        {section.regions.map((region) => renderRegion(region))}
                    </div>
                ) : null}

                {section.type === 'footer' ? (
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {section.regions.map((region) => renderRegion(region))}
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default SectionRenderer
