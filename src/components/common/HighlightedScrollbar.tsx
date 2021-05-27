import * as React from 'react'
import { FC } from 'react'
import { COLOR_THEME } from '../../theme/color'
import Scrollbars from 'react-custom-scrollbars'
import { Box } from '@chakra-ui/react'


export const HighlightedScrollbar: FC = p => <Scrollbars
    autoHide={false}
    autoHeight
    autoHeightMax="auto"
    // renderView={props => (
    //     <div {...props} style={{ ...props.style, overflowX: 'hidden' }}/>
    // )}
    renderThumbHorizontal={({ style, ...props }) =>
        <div {...props} style={{
            ...style,
            backgroundColor: COLOR_THEME.active,
            width: '3px',
            // overflowX: 'scroll'
        }}/>
    }>
    <Box>{p.children}</Box>
</Scrollbars>
