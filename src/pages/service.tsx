// @ts-ignore
import { mainpage } from '../../config/content.yml'

import * as React from 'react'
import { Page } from '../containers/Page'
import { Heading } from '@chakra-ui/react'
import * as queryString from 'query-string'


export default ({ location }) => {
    const { g, s }: any = location.search ? queryString.parse(location.search) : {}

    return <Page topBar={<div/>}>
        <Heading size="md">{g}</Heading>
        <Heading size="sm">{s}</Heading>
    </Page>
}
