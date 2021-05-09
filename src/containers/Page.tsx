import * as React from 'react'
import { FC, ReactNode } from 'react'
import { Layout } from './Layout'
import { SideBar } from '../components/sidebar/SideBar'


export const Page: FC<{ topBar?: ReactNode }> = ({ topBar, children }) =>
    <Layout topBar={topBar ?? <div/>} sideBar={<SideBar/>} content={children}/>
