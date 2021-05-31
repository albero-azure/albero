import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import { Divider, Heading, HStack, Stack } from '@chakra-ui/react'
import { HighlightedScrollbar } from '../common/HighlightedScrollbar'
import { ServicesCard } from './ServicesCard'
import { CloudServiceGroup } from '../../domain/model/CloudServiceGroup'
import { CloudFilter } from '../../domain/model/CloudFilter'
import { CloudService } from '../../domain/model/CloudService'
import { CloudRepo } from '../../domain/repo/CloudRepo'


const searchService = (search: string) => (service: CloudService) => {
    const lowerCaseSearch = search.toLowerCase()
    return service.name.toLowerCase().includes(lowerCaseSearch) ||
        service.description.toLowerCase().includes(lowerCaseSearch)
}


export const ServiceGroup: FC<{
    group: CloudServiceGroup
    filter?: CloudFilter
    search?: string
}> = ({ group, filter, search }) => {
    const [services, setServices] = useState<CloudService[]>([])

    useEffect(() => {
        let filteredServices = CloudRepo.obj.services(group, filter)
        if (search) filteredServices = filteredServices.filter(searchService(search))
        setServices(filteredServices)
    }, [group, filter, search])

    return <Stack>
        <Heading as="h2" size="md" color="#293F54">
            {group.name.toUpperCase()}
        </Heading>

        <Divider/>

        <HighlightedScrollbar>
            <HStack m={2} p={6} spacing={6}>
                {services.map(e => <ServicesCard key={e.name} group={group} service={e}/>)}
            </HStack>
        </HighlightedScrollbar>
    </Stack>
}
