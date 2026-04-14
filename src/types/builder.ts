export type BuilderNodeType = 'page' | 'section' | 'text' | 'button' | 'image'

export type BuilderViewport = 'desktop' | 'tablet' | 'mobile'

export interface BuilderNodeContent {
    text?: string
    label?: string
    href?: string
    src?: string
    alt?: string
}

export interface BuilderNodeStyle {
    backgroundColor?: string
    color?: string
    fontSize?: number
}

export interface BuilderNodeLayout {
    width?: number
    height?: number
}

export interface BuilderNode {
    id: string
    type: BuilderNodeType
    content?: BuilderNodeContent
    style?: BuilderNodeStyle
    layout?: BuilderNodeLayout
    children?: BuilderNode[]
}
