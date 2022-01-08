import { Typography,styled } from '@mui/material'
import React from 'react'

type ListProps = {
    children: React.ReactNode[]
}

const Li = styled('li')(({theme})=>({
    ':-khtml-any-link': {
        color:theme.palette.primary.main,
        fontSize: '1.25rem',
        fontWeight: 500,
        '&.li': {
            paddingLeft:theme.spacing(1),
        }
    }
}))


export const CustomList = ({ children }: ListProps) => {
    if (Array.isArray(children) &&children.length >1) {
        
        return (
            <Li>
                <Typography variant="body1" component={'div'} >
                    {children}
                </Typography>
            </Li>
        )
    }
    return (
        <Li>
                <Typography variant="body1">
                    {children}
                </Typography>
            </Li>
    )

}