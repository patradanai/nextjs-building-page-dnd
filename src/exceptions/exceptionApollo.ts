import { ApolloError } from '@apollo/client'

export class HttpApolloException extends Error {
    code: string
    status: string

    constructor(err: ApolloError) {
        super(err.message)

        const errorParser = this.wrapperError(err)

        this.code = errorParser.code || 'E999999'
        this.status = errorParser.status || 'Internal Server Error'
        this.message = errorParser.message || 'Internal Server Error'
    }

    private wrapperError(error: ApolloError): {
        code: string
        status: string
        message: string
    } {
        const { networkError } = error

        if (networkError) {
            return {
                code: networkError.name,
                message: networkError.message,
                status: 'Network Error',
            }
        } else {
            return {
                code: 'EUNKNOWN',
                message: `${error.message} || An error occurred while contacting the server.`,
                status: 'Network Error',
            }
        }
    }
}
