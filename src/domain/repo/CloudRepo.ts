// @ts-ignore
import { filter, mainpage } from '../../../config/content.yml'
import { CloudFilter } from '../model/CloudFilter'
import { CloudService } from '../model/CloudService'
import { CloudServiceGroup } from '../model/CloudServiceGroup'
import { isIntersect } from '../../util/collection'


const anyFilterIntersect = (items: CloudFilter, filter: CloudFilter) => {
    const platformRequired = filter.platforms.length > 0
    const technologyRequired = filter.technologies.length > 0
    const viewpointRequired = filter.viewpoints.length > 0

    if (platformRequired && !isIntersect(items.platforms, filter.platforms)) return false
    if (technologyRequired && !isIntersect(items.technologies, filter.technologies)) return false
    if (viewpointRequired && !isIntersect(items.viewpoints, filter.viewpoints)) return false

    return true
}


export class CloudRepo {
    static obj = new CloudRepo(mainpage)
    static filter = filter

    constructor(contentConfig: any) {
        this.allGroups = contentConfig.groups.map(g => {
            g.filter = {
                ...<CloudFilter>{ platforms: [], technologies: [], viewpoints: [], },
                ...g.filter
            }
            g.services.forEach(s => {
                s.filter = {
                    ...<CloudFilter>{ platforms: [], technologies: [], viewpoints: [], },
                    ...s.filter,
                }
            })
            return g
        })
    }

    private readonly allGroups: CloudServiceGroup[]

    services(group: CloudServiceGroup, filter?: CloudFilter): CloudService[] {
        if (!filter) return group.services
        return group.services.filter(g => anyFilterIntersect(g.filter, filter))
    }

    groups(filter?: CloudFilter, strictFilter = false): CloudServiceGroup[] {
        if (!filter) return this.allGroups
        return this.allGroups.filter(g => anyFilterIntersect(g.filter, filter))
    }
}
