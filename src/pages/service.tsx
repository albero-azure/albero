// @ts-ignore
import { filter, mainpage } from '../../config/content.yml'

import * as React from 'react'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import * as queryString from 'query-string'
import { Button, Center, Heading, HStack, VStack } from '@chakra-ui/react'
import { Page } from '../containers/Page'
import { CloudService } from '../components/services/CloudService'
import { find, get, pipe } from 'lodash/fp'
import ZoomIn from '../images/ZoomIn.svg'
import ZoomOut from '../images/ZoomOut.svg'
import { findNext, findPrev, hasNext, hasPrev } from '../util/collection'


const findService = (g: string, s: string) => pipe(
    find({ name: g }),
    get('services'),
    find({ name: s }),
)


export default ({ location }) => {
    const { g, s }: any = useMemo(() => location.search ? queryString.parse(location.search) : {}, [location])
    const fs = useCallback(findService(g, s), [g, s])

    const service: CloudService = useMemo<CloudService>(() => fs(mainpage.groups), [fs])

    const { images } = service ?? {}
    const [image, setImage] = useState(images?.[0])

    const [zoomIn, setZoomIn] = useState(false)
    const [zoomOut, setZoomOut] = useState(false)
    useEffect(() => {
        setZoomIn(hasNext(image, images))
        setZoomOut(hasPrev(image, images))
    }, [image])

    const clickZoomIn = () => {
        if (!zoomIn) return
        setImage(findNext(image, images))
    }
    const clickZoomOut = () => {
        if (!zoomOut) return
        setImage(findPrev(image, images))
    }

    return <Page fullSize topBar={
        <TopBar g={g} s={s}
                onZoomIn={clickZoomIn} onZoomOut={clickZoomOut}
                isZoomIn={zoomIn} isZoomOut={zoomOut}
        />
    }>
        {service && <div style={{ overflow: 'visible' }}>
            <img alt={service.name} src={image} style={{ maxWidth: 'unset' }}/>
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
