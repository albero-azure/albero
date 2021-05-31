import { CloudFilter } from './CloudFilter'


export interface CloudService {
    name: string
    description: string
    preview: string
    items: string[]
    filter: CloudFilter
}
