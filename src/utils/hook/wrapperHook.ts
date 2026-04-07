'use client'
import { useState, useEffect } from 'react'

type Params<T> = T

interface IOptions<T, S> {
    params?: Params<T>
    queryFn: (params: Params<T> | Record<string, any>) => Promise<S>
    onCompleted?: (_data: S) => void
    onError?: (_error: any) => void
}

interface IRepresenter<S> {
    error?: string
    data?: S | null
    loading: boolean
}

export const useQueryWrapperHook = <T, S>(
    options?: IOptions<T, S>
): IRepresenter<S> => {
    const [loading, setLoading] = useState<boolean>(!!options)
    const [error, setError] = useState<any>(null)
    const [data, setData] = useState<S | null>(null)

    useEffect(() => {
        if (!options) return

        options
            .queryFn(options.params ?? {})
            .then((res) => {
                setData(res)
                options.onCompleted?.(res)
            })
            .catch((err) => {
                setError(err)
                options.onError?.(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { data, loading, error }
}
