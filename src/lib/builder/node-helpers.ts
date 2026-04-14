import { createDefaultNode } from '@/lib/builder/default-page-schema'
import {
    BuilderNode,
    BuilderNodeContent,
    BuilderNodeLayout,
    BuilderNodeStyle,
} from '@/types/builder'

export const findNodeById = (
    node: BuilderNode,
    targetId: string | null
): BuilderNode | null => {
    if (!targetId) {
        return null
    }

    if (node.id === targetId) {
        return node
    }

    for (const child of node.children ?? []) {
        const matchedNode = findNodeById(child, targetId)

        if (matchedNode) {
            return matchedNode
        }
    }

    return null
}

export const updateNodeById = (
    node: BuilderNode,
    targetId: string,
    updater: (node: BuilderNode) => BuilderNode
): BuilderNode => {
    if (node.id === targetId) {
        return updater(node)
    }

    return {
        ...node,
        children: node.children?.map((child) =>
            updateNodeById(child, targetId, updater)
        ),
    }
}

export const updateNodeContentById = (
    node: BuilderNode,
    targetId: string,
    contentPatch: Partial<BuilderNodeContent>
) =>
    updateNodeById(node, targetId, (currentNode) => ({
        ...currentNode,
        content: {
            ...currentNode.content,
            ...contentPatch,
        },
    }))

export const updateNodeStyleById = (
    node: BuilderNode,
    targetId: string,
    stylePatch: Partial<BuilderNodeStyle>
) =>
    updateNodeById(node, targetId, (currentNode) => ({
        ...currentNode,
        style: {
            ...currentNode.style,
            ...stylePatch,
        },
    }))

export const updateNodeLayoutById = (
    node: BuilderNode,
    targetId: string,
    layoutPatch: Partial<BuilderNodeLayout>
) =>
    updateNodeById(node, targetId, (currentNode) => ({
        ...currentNode,
        layout: {
            ...currentNode.layout,
            ...layoutPatch,
        },
    }))

export const addNodeToFirstSection = (
    node: BuilderNode,
    type: 'text' | 'button' | 'image'
): BuilderNode => {
    let isInserted = false

    const insertIntoFirstSection = (currentNode: BuilderNode): BuilderNode => {
        if (!isInserted && currentNode.type === 'section') {
            isInserted = true

            return {
                ...currentNode,
                children: [
                    ...(currentNode.children ?? []),
                    createDefaultNode(type),
                ],
            }
        }

        return {
            ...currentNode,
            children: currentNode.children?.map(insertIntoFirstSection),
        }
    }

    return insertIntoFirstSection(node)
}
