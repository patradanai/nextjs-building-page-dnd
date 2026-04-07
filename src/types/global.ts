export type IMenuPermissionResponse = Record<string, never>

export type IMenuPermissionRequest = Record<string, never>

export interface IMenus {
    id: number
    name: string
    url: string
    icon: string
    children: IMenus[]
}
