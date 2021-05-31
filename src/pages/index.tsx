import * as React from 'react'
import { useState } from 'react'
import { Page } from '../containers/Page'
import { ServiceGroup } from '../components/services/ServiceGroup'
import { Stack } from '@chakra-ui/react'
import { ServiceTopBar } from '../components/services/ServiceTopBar'
import { CloudRepo } from '../domain/repo/CloudRepo'
import { CloudFilter } from '../domain/model/CloudFilter'


export default () => {
    const groups = CloudRepo.obj.groups()
    const [filter, setFilter] = useState<CloudFilter>({ platforms: [], technologies: [], viewpoints: [] })
    const [search, setSearch] = useState('')

    return <Page topBar={<ServiceTopBar onFilterChange={setFilter} onSearchChange={setSearch}/>}>
        <Stack spacing={10}>
            {groups.map(g =>
                <ServiceGroup key={g.name} group={g} filter={filter} search={search}/>
            )}
        </Stack>
    </Page>
}
