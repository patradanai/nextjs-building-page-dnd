import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource,
    InternalAxiosRequestConfig,
} from 'axios'

type RequestInterceptor = (
    config: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig
type RequestReject = (error: any) => Promise<any>

type ResponseInterceptor = (response: AxiosResponse) => AxiosResponse
type ResponseRejected = (error: any) => Promise<any>

interface IHTTPClient {
    createInstance(options: AxiosRequestConfig): AxiosInstance
    setRequestInterceptor(
        requestInterceptor: RequestInterceptor,
        errorReject: RequestReject
    ): void
    setResponseInterceptor(
        responseInterceptor: ResponseInterceptor,
        errorReject: ResponseRejected
    ): void
    cancelRequest(): void
}

/**
 * A base class for creating HTTP client instances and API service classes.
 * Provides a foundation for making API requests using Axios.
 */
abstract class HTTPClient implements IHTTPClient {
    protected instance: AxiosInstance | undefined
    private axiosToken: CancelTokenSource | undefined

    createInstance(options: AxiosRequestConfig): AxiosInstance {
        this.axiosToken = axios.CancelToken.source()
        this.instance = axios.create({
            ...options,
            cancelToken: this.axiosToken?.token,
        })

        return this.instance
    }

    setRequestInterceptor(
        requestInterceptor: RequestInterceptor,
        errorReject: RequestReject
    ) {
        this.instance?.interceptors.request.use(requestInterceptor, errorReject)
    }

    setResponseInterceptor(
        responseInterceptor: ResponseInterceptor,
        errorReject: ResponseRejected
    ) {
        this.instance?.interceptors.response.use(
            responseInterceptor,
            errorReject
        )
    }

    cancelRequest() {
        this.axiosToken?.cancel()
    }
}

interface IHTTPMethodAdapter {
    get<T>(route: string, params: any): Promise<T>
    post<T>(route: string, data: any): Promise<T>
    put<T>(route: string, params: any, data: T): Promise<T>
    delete<T>(route: string): Promise<T>
}

/**
 * A base class for API service classes that perform CRUD operations.
 * Subclasses can extend this class to implement specific APIs.
 */
export abstract class BaseApiService
    extends HTTPClient
    implements IHTTPMethodAdapter
{
    protected client: AxiosInstance
    protected context: string | undefined

    constructor(params: AxiosRequestConfig) {
        super()
        this.client = this.createInstance(params)
    }

    async get<T>(route: string, params: any = null): Promise<T> {
        return this.client.get<T>(route, { params: params }) as T
    }

    async post<T>(route: string, data?: any): Promise<T> {
        return this.client.post(route, data) as T
    }

    async put<T>(route: string, params: any = null, data: any): Promise<T> {
        return this.client.put<T>(route, data, { params: params }) as T
    }

    async delete<T>(route: string): Promise<T> {
        return this.client.delete<T>(route) as T
    }
}
