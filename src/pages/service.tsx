// @ts-ignore
import { filter, mainpage } from '../../config/content.yml'

import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import { Button, Center, Heading, HStack, VStack } from '@chakra-ui/react'
import { Page } from '../containers/Page'
import { CloudService } from '../domain/model/CloudService'
import ZoomIn from '../images/ZoomIn.svg'
import ZoomOut from '../images/ZoomOut.svg'
import { findNext, findPrev, hasNext, hasPrev } from '../util/collection'
import { useQueryParam } from 'use-query-params'
import { CloudServiceGroup } from '../domain/model/CloudServiceGroup'


const findService: any = (g: string, s: string) => {
    const groups: CloudServiceGroup[] = mainpage.groups

    const [group] = groups.filter(e => e.name === g)
    if (!group) return

    const [service] = group.services.filter(e => e.name === s)
    return service
}


export default () => {
    const [g] = useQueryParam('g')
    const [s] = useQueryParam('s')

    const service: CloudService = findService(g, s)

    const { items } = service ?? {}
    const [item, setItem] = useState(items?.[0])

    const [zoomIn, setZoomIn] = useState(false)
    const [zoomOut, setZoomOut] = useState(false)
    useEffect(() => {
        setZoomIn(hasNext(item, items))
        setZoomOut(hasPrev(item, items))
    }, [item])

    const clickZoomIn = () => {
        if (!zoomIn) return
        setItem(findNext(item, items))
    }
    const clickZoomOut = () => {
        if (!zoomOut) return
        setItem(findPrev(item, items))
    }

    return <Page fullSize topBar={
        <TopBar g={g} s={s}
                onZoomIn={clickZoomIn} onZoomOut={clickZoomOut}
                isZoomIn={zoomIn} isZoomOut={zoomOut}
        />
    }>
        {service && <div style={{ overflow: 'visible', width: '100%', height: '100%' }}>
            <div style={{ width: '100%', height: '100%' }}
                 dangerouslySetInnerHTML={{
                     __html: `<iframe style="width: 100%; height: 100%" src="${item}" />`
                 }}
            />
            {/*<img alt={service.name} src={image} style={{ maxWidth: 'unset' }}/>*/}
        </div>}
    </Page>
}


const TopBar: FC<{
    g: string, s: string
    onZoomIn: Function
    onZoomOut: Function
    isZoomIn: boolean
    isZoomOut: boolean
}> = ({ g, s, onZoomIn, onZoomOut, isZoomIn, isZoomOut }) => <HStack height="100%">
    <HStack height="100%">
        <Center>
            <VStack height="100%">
                <Heading size="md">{g}</Heading>
                <Heading size="sm">{s}</Heading>
            </VStack>
        </Center>
    </HStack>

    <HStack height="100%" position="absolute" right="50px">
        <Button variant="link" onClick={onZoomIn} disabled={!isZoomIn}>
            <ZoomIn/>
        </Button>

        <Button variant="link" onClick={onZoomOut} disabled={!isZoomOut}>
            <ZoomOut/>
        </Button>
    </HStack>
</HStack>
