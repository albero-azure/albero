// @ts-ignore
import { mainpage } from '../../config/content.yml'

import * as React from 'react'
import { Page } from '../containers/Page'
import { ServiceGroup } from '../components/services/ServiceGroup'
import { Stack } from '@chakra-ui/react'
import { ServiceTopBar } from '../components/services/ServiceTopBar'


export default () => <Page topBar={<ServiceTopBar/>}>
    <Stack spacing={10}>
        {mainpage.groups.map(e => <ServiceGroup key={e.name} group={e}/>)}
    </Stack>
</Page>
