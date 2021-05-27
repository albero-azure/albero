import * as React from 'react'
import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { LAYOUT_THEME } from '../theme/layout'
import Scrollbars from 'react-custom-scrollbars'


export const Layout: FC<{
    topBar: ReactNode
    sideBar: ReactNode
    content: ReactNode
    withPadding?: boolean
}> = p => <div>
    <TopBarLayout>{p.topBar}</TopBarLayout>
    <SideBarLayout>{p.sideBar}</SideBarLayout>
    <ContentLayout>
        <Scrollbars>
            {p.withPadding
                ? <ContentPadding>{p.content}</ContentPadding>
                : <div>{p.content}</div>}
        </Scrollbars>
    </ContentLayout>
</div>


const TopBarLayout = styled.div`
  background-color: ${LAYOUT_THEME.topBar.backgroundColor};
  padding-left: ${LAYOUT_THEME.topBar.paddingLeft};
  padding-right: ${LAYOUT_THEME.topBar.paddingRight};
  position: fixed;
  height: ${LAYOUT_THEME.topBar.height};
  width: 100%;
  top: 0;
  left: 0;
`

const SideBarLayout = styled.div`
  background-color: ${LAYOUT_THEME.sideBar.backgroundColor};
  width: ${LAYOUT_THEME.sideBar.width};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`

export const ContentLayout = styled.div`
  margin-left: ${LAYOUT_THEME.sideBar.width};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: ${LAYOUT_THEME.topBar.height};
`

export const ContentPadding = styled.div`
  padding-top: ${LAYOUT_THEME.content.paddingTop};
  padding-left: ${LAYOUT_THEME.content.padding};
  padding-right: ${LAYOUT_THEME.content.padding};
  padding-bottom: ${LAYOUT_THEME.content.padding};
`
