import {NotionCommandEnum} from "./database/notion";


export const serverHost = process.env.MIDDLEWARE_SERVER_HOST
export const testServerHost = process.env.TEST_MIDDLEWARE_SERVER_HOST

export type MiddlewareResponse = {
    command: string
    code: number
    message: string
    error: boolean
    result: object
}

type MiddlewareHeader = {
    command: NotionCommandEnum
    [key: string]: string
    'Accept': string
    auth: string
}

export const defaultMiddlewareHeader = {
    'Accept': "application/json"
}

export const noAuthMiddlewareHeader = {
    auth: ""
}

export default function middleware(
    path: string,
    header: MiddlewareHeader,
    setLoaded: (loaded: boolean) => void,
    setError: (e: Error) => void,
    setData: (data: MiddlewareResponse) => void
) {
    fetch(path, {
        headers: header
    })
        .then(response => {
            if (response.ok) {
                setLoaded(true)
            } else {
                setLoaded(false)
            }
            return response.json()
        })
        .then(json => {
            setData(json)
        })
}
