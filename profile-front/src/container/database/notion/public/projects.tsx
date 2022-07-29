
import React, {useEffect, useState} from "react";

import middleware, {defaultMiddlewareHeader, noAuthMiddlewareHeader} from "../../../../functions/middleware";
import notion_paths, {NotionCommandEnum} from "../../../../functions/middleware/database/notion";


type Project = {
    code: string
    name: string
    description: string
    url: string
}

type ChildrenProps = {
    projects: Project[],
    [code: string]: any
}

type Children = ((props: ChildrenProps) => JSX.Element)

type ProjectProps = {
    code?: string
    name?: string
    descriptionKeyword?: string
    url?: string
    
    children?: Children[]
}

const JustURL = (props: ChildrenProps) => {
    return <div key={"children"}>{props.projects.map((project, index) => <h1 key={"MN_JustURL_project_" + Math.random() + index}>{project.url}</h1>)}</div>
}

/**
 * @param children root node should have props:key
 * @param code
 * @param name
 * @param descriptionKeyword
 * @param url
 */
export default function Projects({ children = [JustURL], code, name, descriptionKeyword, url }: ProjectProps) {

    const [data, setData] = useState([] as Project[])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(Error)

    useEffect(() => {
        if (!loaded) {
            middleware(
                notion_paths.public.projects,
                {
                    ...defaultMiddlewareHeader,
                    ...noAuthMiddlewareHeader,
                    command: NotionCommandEnum.QUERY,
                    code: code || "",
                    name: name || "",
                    descriptionKeyword: descriptionKeyword || "",
                    url: url || ""
                },
                loaded => setLoaded(loaded),
                error => {
                    console.log(error)
                    setError(error)
                },
                data => setData(data.result as Project[])
            )
        }
    })

    return (
        <>
            {children?.map(child => child({ projects: data }))}
        </>
    )

}
