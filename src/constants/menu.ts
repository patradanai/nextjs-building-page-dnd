import { faGit } from '@fortawesome/free-brands-svg-icons'
import { faCaravan, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

export const menu = [
    {
        groupName: 'MAIN',
        groupRoutes: [
            {
                name: 'DigitalOcean Management',
                roles: [],
                permissions: [],
                route: '/resource',
                icon: faCaravan,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'Repository',
                roles: [],
                permissions: [],
                route: '/repository',
                icon: faGit,
                sub_menu: [
                    {
                        name: 'Repository',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
        ],
    },
    {
        groupName: 'Settings',
        groupRoutes: [
            {
                name: 'API KEY',
                roles: [],
                permissions: [],
                route: '/settings/api',
                icon: faPaintBrush,
                sub_menu: [
                    {
                        name: 'Repository',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
        ],
    },
]
