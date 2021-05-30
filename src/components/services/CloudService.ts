export interface CloudServiceGroup {
    name: string
    services: CloudService[]
}


export interface CloudService {
    name: string
    description: string
    preview: string
    items: string[]
}
