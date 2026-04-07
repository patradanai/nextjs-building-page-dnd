export interface IMenuPermissionResponse {}

export interface IMenuPermissionRequest {}

export interface IMenus {
    id: number
    name: string
    url: string
    icon: string
    children: IMenus[]
}
