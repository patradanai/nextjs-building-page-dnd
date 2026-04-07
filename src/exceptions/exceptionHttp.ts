export class HttpException extends Error {
    code: string
    status: string

    constructor(err: string) {
        super(err)

        const errorParser = this.wrapperErrorAxios(err)

        this.code = errorParser.code || 'E999999'
        this.status = errorParser.status || 'Internal Server Error'
        this.message = errorParser.message || 'Internal Server Error'
    }

    private wrapperErrorAxios(error: any): {
        code: string
        status: string
        message: string
    } {
        const { response } = error

        if (response) {
            const { data } = response

            if (data) {
                return data
            }
        }

        return error
    }
}
