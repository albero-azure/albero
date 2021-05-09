import * as React from 'react'
import { FC } from 'react'
import { Logo } from './Logo'
import { Center } from '@chakra-ui/react'
import { SideBarButton } from './SideBarButton'

// @ts-ignore
import { sidebar } from '../../../config/content.yml'


export const SideBar: FC = () => <div>
    <Center marginTop="20px" marginBottom="58px">
        <Logo/>
    </Center>

    <SideBarButton image="Home" link={sidebar.link.home}/>
    <SideBarButton image="GitHub" link={sidebar.link.github}/>
    <SideBarButton image="Share" link={sidebar.link.share}/>
    <SideBarButton image="Contact" link={sidebar.link.contact}/>
</div>
