import { create } from 'zustand'

import { Block, PageContent, Section, Viewport } from '@/types/siteBuilder'

type BuilderMode = 'draft' | 'published'

interface BuilderSelection {
    sectionId?: string
    regionId?: string
    blockId?: string
}

interface UseBuilderStoreState {
    content: PageContent | null
    viewport: Viewport
    mode: BuilderMode
    selection: BuilderSelection
    isDirty: boolean
}

interface UseBuilderStoreActions {
    reset: () => void
    setContent: (content: PageContent) => void
    setViewport: (viewport: Viewport) => void
    setMode: (mode: BuilderMode) => void
    setSelection: (selection: BuilderSelection) => void
    selectSection: (sectionId?: string) => void
    selectRegion: (sectionId?: string, regionId?: string) => void
    selectBlock: (
        sectionId?: string,
        regionId?: string,
        blockId?: string
    ) => void
    clearSelection: () => void
    addSection: (section: Section, index?: number) => void
    updateSection: (
        sectionId: string,
        updater: (section: Section) => Section
    ) => void
    removeSection: (sectionId: string) => void
    moveSection: (fromIndex: number, toIndex: number) => void
    addBlock: (
        sectionId: string,
        regionId: string,
        block: Block,
        index?: number
    ) => void
    updateBlock: (
        sectionId: string,
        regionId: string,
        blockId: string,
        updater: (block: Block) => Block
    ) => void
    removeBlock: (sectionId: string, regionId: string, blockId: string) => void
    moveBlock: (
        sectionId: string,
        regionId: string,
        fromIndex: number,
        toIndex: number
    ) => void
}

export type UseBuilderStore = UseBuilderStoreState & UseBuilderStoreActions

const INITIAL_STATE: UseBuilderStoreState = {
    content: null,
    viewport: 'desktop',
    mode: 'draft',
    selection: {},
    isDirty: false,
}

const clampInsertIndex = (length: number, index?: number) => {
    if (index === undefined) return length
    if (index < 0) return 0
    if (index > length) return length
    return index
}

const moveItem = <T>(items: T[], fromIndex: number, toIndex: number): T[] => {
    if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= items.length ||
        toIndex >= items.length ||
        fromIndex === toIndex
    ) {
        return items
    }

    const nextItems = [...items]
    const [movedItem] = nextItems.splice(fromIndex, 1)
    nextItems.splice(toIndex, 0, movedItem)
    return nextItems
}

export const useBuilderStore = create<UseBuilderStore>()((set) => ({
    ...INITIAL_STATE,
    reset: () => set(() => INITIAL_STATE),
    setContent: (content) =>
        set(() => ({
            content,
            isDirty: false,
            selection: {},
        })),
    setViewport: (viewport) => set(() => ({ viewport })),
    setMode: (mode) => set(() => ({ mode })),
    setSelection: (selection) => set(() => ({ selection })),
    selectSection: (sectionId) =>
        set(() => ({
            selection: sectionId ? { sectionId } : {},
        })),
    selectRegion: (sectionId, regionId) =>
        set(() => ({
            selection:
                sectionId && regionId
                    ? { sectionId, regionId }
                    : sectionId
                      ? { sectionId }
                      : {},
        })),
    selectBlock: (sectionId, regionId, blockId) =>
        set(() => ({
            selection:
                sectionId && regionId && blockId
                    ? { sectionId, regionId, blockId }
                    : sectionId && regionId
                      ? { sectionId, regionId }
                      : sectionId
                        ? { sectionId }
                        : {},
        })),
    clearSelection: () => set(() => ({ selection: {} })),
    addSection: (section, index) =>
        set((state) => {
            if (!state.content) return {}

            const insertIndex = clampInsertIndex(
                state.content.sections.length,
                index
            )
            const sections = [...state.content.sections]
            sections.splice(insertIndex, 0, section)

            return {
                content: {
                    ...state.content,
                    sections,
                },
                isDirty: true,
            }
        }),
    updateSection: (sectionId, updater) =>
        set((state) => {
            if (!state.content) return {}

            return {
                content: {
                    ...state.content,
                    sections: state.content.sections.map((section) =>
                        section.id === sectionId ? updater(section) : section
                    ),
                },
                isDirty: true,
            }
        }),
    removeSection: (sectionId) =>
        set((state) => {
            if (!state.content) return {}

            const sections = state.content.sections.filter(
                (section) => section.id !== sectionId
            )
            const shouldClearSelection = state.selection.sectionId === sectionId

            return {
                content: {
                    ...state.content,
                    sections,
                },
                isDirty: true,
                selection: shouldClearSelection ? {} : state.selection,
            }
        }),
    moveSection: (fromIndex, toIndex) =>
        set((state) => {
            if (!state.content) return {}

            return {
                content: {
                    ...state.content,
                    sections: moveItem(
                        state.content.sections,
                        fromIndex,
                        toIndex
                    ),
                },
                isDirty: true,
            }
        }),
    addBlock: (sectionId, regionId, block, index) =>
        set((state) => {
            if (!state.content) return {}

            return {
                content: {
                    ...state.content,
                    sections: state.content.sections.map((section) => {
                        if (section.id !== sectionId) return section

                        return {
                            ...section,
                            regions: section.regions.map((region) => {
                                if (region.id !== regionId) return region

                                const insertIndex = clampInsertIndex(
                                    region.blocks.length,
                                    index
                                )
                                const blocks = [...region.blocks]
                                blocks.splice(insertIndex, 0, block)

                                return {
                                    ...region,
                                    blocks,
                                }
                            }),
                        }
                    }),
                },
                isDirty: true,
            }
        }),
    updateBlock: (sectionId, regionId, blockId, updater) =>
        set((state) => {
            if (!state.content) return {}

            return {
                content: {
                    ...state.content,
                    sections: state.content.sections.map((section) => {
                        if (section.id !== sectionId) return section

                        return {
                            ...section,
                            regions: section.regions.map((region) => {
                                if (region.id !== regionId) return region

                                return {
                                    ...region,
                                    blocks: region.blocks.map((block) =>
                                        block.id === blockId
                                            ? updater(block)
                                            : block
                                    ),
                                }
                            }),
                        }
                    }),
                },
                isDirty: true,
            }
        }),
    removeBlock: (sectionId, regionId, blockId) =>
        set((state) => {
            if (!state.content) return {}

            const shouldClearSelection = state.selection.blockId === blockId

            return {
                content: {
                    ...state.content,
                    sections: state.content.sections.map((section) => {
                        if (section.id !== sectionId) return section

                        return {
                            ...section,
                            regions: section.regions.map((region) => {
                                if (region.id !== regionId) return region

                                return {
                                    ...region,
                                    blocks: region.blocks.filter(
                                        (block) => block.id !== blockId
                                    ),
                                }
                            }),
                        }
                    }),
                },
                isDirty: true,
                selection: shouldClearSelection
                    ? { sectionId, regionId }
                    : state.selection,
            }
        }),
    moveBlock: (sectionId, regionId, fromIndex, toIndex) =>
        set((state) => {
            if (!state.content) return {}

            return {
                content: {
                    ...state.content,
                    sections: state.content.sections.map((section) => {
                        if (section.id !== sectionId) return section

                        return {
                            ...section,
                            regions: section.regions.map((region) => {
                                if (region.id !== regionId) return region

                                return {
                                    ...region,
                                    blocks: moveItem(
                                        region.blocks,
                                        fromIndex,
                                        toIndex
                                    ),
                                }
                            }),
                        }
                    }),
                },
                isDirty: true,
            }
        }),
}))
