import * as React from 'react'
import { FC } from 'react'
import { Select } from '@chakra-ui/react'
import { LAYOUT_THEME } from '../../theme/layout'


export const TopBarFilters: FC<{
    placeholder: string
    options: string[]
    onChange?: (value: string) => void
}> = p => <div>
    <Select
        variant="outline"
        placeholder={p.placeholder}
        color={LAYOUT_THEME.topBar.selectColor}
        borderColor={LAYOUT_THEME.topBar.selectColor}
        borderWidth="2px"
        iconSize="24px"
        fontSize="17px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="20px"
        letterSpacing="0em"
        textAlign="left"
    >
        {p.options.map(e => <option key={e} value={e}>{e}</option>)}
    </Select>
</div>
