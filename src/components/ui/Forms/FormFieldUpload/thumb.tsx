import React, { useState, useEffect } from 'react'

import { NextPage } from 'next'

interface Props {
    file: any
}

const ThumbImage: NextPage<Props> = ({ file }: any) => {
    const [state, setState] = useState<any>(null)
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        if (file instanceof File) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setState(reader.result)
                setLoading(false)
            }

            reader.readAsDataURL(file)
        }
    }, [file])

    if (!file) return null

    if (loading) return <p>Loading...</p>

    return (
        state && (
            <img alt="" src={state} style={{ width: 'auto', height: '100%' }} />
        )
    )
}

export default ThumbImage
