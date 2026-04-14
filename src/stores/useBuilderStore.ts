'use client'

import { create } from 'zustand'

import { getDefaultPageSchema } from '@/lib/builder/default-page-schema'
import {
    addNodeToFirstSection,
    updateNodeContentById,
    updateNodeLayoutById,
    updateNodeStyleById,
} from '@/lib/builder/node-helpers'
import {
    BuilderNode,
    BuilderNodeContent,
    BuilderNodeLayout,
    BuilderNodeStyle,
    BuilderViewport,
} from '@/types/builder'

interface BuilderStore {
    page: BuilderNode
    selectedNodeId: string | null
    viewport: BuilderViewport
    setSelectedNodeId: (nodeId: string | null) => void
    setViewport: (viewport: BuilderViewport) => void
    updateNodeContent: (
        nodeId: string,
        contentPatch: Partial<BuilderNodeContent>
    ) => void
    updateNodeStyle: (
        nodeId: string,
        stylePatch: Partial<BuilderNodeStyle>
    ) => void
    updateNodeLayout: (
        nodeId: string,
        layoutPatch: Partial<BuilderNodeLayout>
    ) => void
    addNodeToFirstSection: (type: 'text' | 'button' | 'image') => void
}

export const useBuilderStore = create<BuilderStore>((set) => ({
    page: getDefaultPageSchema(),
    selectedNodeId: null,
    viewport: 'desktop',
    setSelectedNodeId: (selectedNodeId) => set(() => ({ selectedNodeId })),
    setViewport: (viewport) => set(() => ({ viewport })),
    updateNodeContent: (nodeId, contentPatch) =>
        set((state) => ({
            page: updateNodeContentById(state.page, nodeId, contentPatch),
        })),
    updateNodeStyle: (nodeId, stylePatch) =>
        set((state) => ({
            page: updateNodeStyleById(state.page, nodeId, stylePatch),
        })),
    updateNodeLayout: (nodeId, layoutPatch) =>
        set((state) => ({
            page: updateNodeLayoutById(state.page, nodeId, layoutPatch),
        })),
    addNodeToFirstSection: (type) =>
        set((state) => ({
            page: addNodeToFirstSection(state.page, type),
        })),
}))
