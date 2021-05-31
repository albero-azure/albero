import { CloudService } from './CloudService'
import { CloudFilter } from './CloudFilter'


export interface CloudServiceGroup {
    name: string
    services: CloudService[]
    filter: CloudFilter
}
