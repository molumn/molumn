
export enum NotionCommandEnum {
    PUSH = "PUSH",
    UPDATE = "UPDATE",
    QUERY = "QUERY"
}

export type NotionCommand = {
    command: NotionCommandEnum,
    [key: string]: string
}

const notion_paths = {
    molumn: {
        calendar: "database/molumn/calendar"
    },
    public: {
        projects: "database/public/projects"
    }
}

export default notion_paths
