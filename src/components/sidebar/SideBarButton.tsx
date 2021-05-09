import * as React from 'react'
import { FC } from 'react'
import styled from '@emotion/styled'
import { LAYOUT_THEME } from '../../theme/layout'
import { Center } from '@chakra-ui/react'
import { ContactImage, GitHubImage, HomeImage, ShareImage } from '../../images/navigation/navigation'
import { Link } from 'gatsby'
import { COLOR_THEME } from '../../theme/color'


export const SideBarButton: FC<{
    image: 'Home' | 'GitHub' | 'Share' | 'Contact'
    link: string
}> = p => <div style={{
    height: LAYOUT_THEME.sideBar.buttonHeight,
    width: '100%',
    position: 'relative',
}}>
    {p.link === location.pathname && <ActiveLine/>}

    {p.link.startsWith('http')
        ? <a href={p.link} target="_blank"><ButtonImage name={p.image}/></a>
        : <Link to={p.link}><ButtonImage name={p.image}/></Link>}
</div>


const ButtonImage: FC<{ name: string }> = ({ name }) =>
    <Center height="100%" width="100%" position="relative" _hover={{ opacity: 0.5 }}>
        {name === 'Home' && <HomeImage/>}
        {name === 'GitHub' && <GitHubImage/>}
        {name === 'Share' && <ShareImage/>}
        {name === 'Contact' && <ContactImage/>}
    </Center>


const ActiveLine = styled.div`
  background-color: ${COLOR_THEME.active};
  position: absolute;
  width: 5px;
  z-index: 999;
  height: 100%;
`
