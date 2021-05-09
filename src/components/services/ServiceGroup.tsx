import * as React from 'react'
import { FC } from 'react'
import { Divider, Heading, HStack, Stack } from '@chakra-ui/react'
import { CloudServiceGroup } from './CloudService'
import { HighlightedScrollbar } from '../common/HighlightedScrollbar'
import { ServicesCard } from './ServicesCard'


export const ServiceGroup: FC<{ group: CloudServiceGroup }> = ({ group }) => <Stack>
    <Heading
        as="h2"
        size="md"
        color="#293F54"
    >
        {group.name.toUpperCase()}
    </Heading>

    <Divider/>

    <HighlightedScrollbar>
        <HStack m={2} p={6} spacing={6}>
            {group.services.map(e => <ServicesCard key={e.name} group={group} service={e}/>)}
        </HStack>
    </HighlightedScrollbar>
</Stack>
