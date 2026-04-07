import React from 'react'

import dynamic from 'next/dynamic'

type DynamicComponentType<T> = T extends Promise<infer U> ? U : never

const AsyncComponentRender = <T extends React.ComponentType<any>>(
    importComponent: () => Promise<T>
) => {
    // Dynamic import with type inference
    const DynamicComponent = dynamic<DynamicComponentType<T>>(importComponent, {
        loading: () => <div>Loading...</div>,
        ssr: false, // Adjust as needed for server-side rendering
    })

    return DynamicComponent
}

export default AsyncComponentRender
