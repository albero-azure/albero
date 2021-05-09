import * as React from 'react'
import { FC } from 'react'
import { HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

// @ts-ignore
import { filter } from '../../../config/content.yml'

// @ts-ignore
import SearchIcon from '../../images/SearchIcon.svg'

import { TopBarFilters } from './TopBarFilters'


export const ServiceTopBar: FC = () => <HStack position="relative" height="100%">
    <TopBarLeft/>
    <TopBarRight/>
</HStack>


const TopBarLeft: FC = () => <HStack height="100%" spacing="24px">
    <TopBarFilters placeholder="Select Platform" options={filter.platforms}/>
    <TopBarFilters placeholder="Select Technology" options={filter.technologies}/>
    <TopBarFilters placeholder="Select Viewpoint" options={filter.viewpoints}/>
</HStack>

const TopBarRight: FC = () => <HStack height="100%" position="absolute" right={0}>
    <InputGroup size="md">
        <Input backgroundColor="white" rounded={24}/>
        <InputRightElement width="3rem">
            <SearchIcon/>
        </InputRightElement>
    </InputGroup>
</HStack>
