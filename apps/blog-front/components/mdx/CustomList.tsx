import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

type ListProps = {
    children: React.ReactNode[]
}

const Li = styled('li')(({theme})=>({
    ':-khtml-any-link': {
        color: theme.palette.primary.main,
        fontSize: '1.25rem',
        fontWeight:500,
    }
}))


export const CustomList = (props:ListProps) => {
    return (
        <Li>
            <Typography variant="body1">
                {props.children[0]}
            </Typography>
            {props.children.slice(1)}
        </Li>
    )

}