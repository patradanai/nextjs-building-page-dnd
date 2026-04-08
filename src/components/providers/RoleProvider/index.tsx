import React from 'react'

import _ from 'lodash'
import { NextPage } from 'next'

type PermissionEmun = 'create' | 'update' | 'delete'
interface Props {
    children: React.ReactNode
    permissions: PermissionEmun
}

interface RoleProviderProps {
    children?: unknown
    permissions: 'create' | 'update' | 'delete'
}

export const RoleProvider: NextPage<Props> = ({
    children,
    permissions,
}: RoleProviderProps) => {
    return _.get([], permissions) ? <>{children}</> : null
}
