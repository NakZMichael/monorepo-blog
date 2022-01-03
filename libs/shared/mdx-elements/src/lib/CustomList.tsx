import {styled,} from '@mui/material'
import React from 'react'

type ListProps = {
    children: React.ReactNode[]
}
const Root = styled('li')(({theme})=>({
    '&::marker': {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h6.fontSize,
    fontWeight:theme.typography.h6.fontWeight,
    }
}))

const Text = styled('p')(({theme})=>({
    fontSize:'0.85rem'
}))

export const CustomList = (props:ListProps) => {
    return (
        <Root>
            <Text>
                {props.children[0]}
            </Text>
            {props.children.slice(1)}
        </Root>
    )

}