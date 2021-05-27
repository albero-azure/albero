import * as React from 'react'
import { FC } from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'
import { CloudService, CloudServiceGroup } from './CloudService'
import { COLOR_THEME } from '../../theme/color'
import { Link } from 'gatsby'


const serviceLink = (g: CloudServiceGroup, s: CloudService) => `/service?g=${g.name}&s=${s.name}`


export const ServicesCard: FC<{ group: CloudServiceGroup, service: CloudService }> = ({ group, service }) => <Box
    // transition="left 0.3s"
    _hover={{
        boxShadow: '0px 30px 40px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
    }}
>
    <Box w="230px" p="14px">
        <Heading as="h3" size="sm" mb="10px" color={COLOR_THEME.heading}>
            {service.name}
        </Heading>

        <Link to={serviceLink(group, service)}>
            <Image
                alt={service.name}
                src={service.images[0]}
                fit="cover"
                // objectPosition="top"
                height="100px"
                width="100%"
                borderRadius="5px"
            />
        </Link>

        <Box pt="8px" color="#293F54" fontSize="14px">
            {service.description}
        </Box>
    </Box>
</Box>
