import { CloudFilter } from './CloudFilter'


export interface CloudService {
    name: string
    description: string
    preview: string
    link?: string
    items: string[]
    filter: CloudFilter
}
