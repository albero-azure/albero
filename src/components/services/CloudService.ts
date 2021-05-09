export interface CloudServiceGroup {
    name: string
    services: CloudService[]
}


export interface CloudService {
    name: string
    description: string
    images: string
}
