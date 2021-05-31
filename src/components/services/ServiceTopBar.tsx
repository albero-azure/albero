import * as React from 'react'
import { FC, useCallback, useEffect, useState } from 'react'
import { HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react'

// @ts-ignore
import SearchIcon from '../../images/SearchIcon.svg'

import { TopBarFilters } from './TopBarFilters'
import { CloudRepo } from '../../domain/repo/CloudRepo'
import { CloudFilter } from '../../domain/model/CloudFilter'
import { debounce } from 'lodash'
import { Settings } from '../../util/Settings'


const SEARCH_DEBOUNCE = Settings.obj.search.debounce


export const ServiceTopBar: FC<{
    onFilterChange: (f: CloudFilter) => void
    onSearchChange: (s: string) => void
}> = p =>
    <HStack position="relative" height="100%">
        <TopBarLeft onChange={p.onFilterChange}/>
        <TopBarRight onChange={p.onSearchChange}/>
    </HStack>


const TopBarLeft: FC<{ onChange: (f: CloudFilter) => void }> = p => {
    const { filter } = CloudRepo

    const [platform, setPlatform] = useState<string>()
    const [technology, setTechnology] = useState<string>()
    const [viewpoint, setViewpoint] = useState<string>()

    useEffect(() => {
        p.onChange({
            platforms: platform ? [platform] : [],
            technologies: technology ? [technology] : [],
            viewpoints: viewpoint ? [viewpoint] : [],
        })
    }, [platform, technology, viewpoint])

    return <HStack height="100%" spacing="24px">
        <TopBarFilters placeholder="Select Platform" options={filter.platforms} onChange={setPlatform}/>
        <TopBarFilters placeholder="Select Technology" options={filter.technologies} onChange={setTechnology}/>
        <TopBarFilters placeholder="Select Viewpoint" options={filter.viewpoints} onChange={setViewpoint}/>
    </HStack>
}

const TopBarRight: FC<{ onChange: (s: string) => void }> = p => {
    const onChange = useCallback(
        debounce(v => p.onChange(v), SEARCH_DEBOUNCE) as any, []
    )

    return <HStack height="100%" position="absolute" right={0}>
        <InputGroup size="md">
            <Input backgroundColor="white" rounded={24} onChange={e => onChange(e.target.value)}/>
            <InputRightElement width="3rem">
                <SearchIcon/>
            </InputRightElement>
        </InputGroup>
    </HStack>
}
