import React from 'react'
import {Box, Typography,styled } from '@mui/material'

type HeadingProps = {
    children: React.ReactNode
}

export const Heading1 = ({children}:HeadingProps)=>{
    return (
        <Box 
            sx={{
                paddingY:theme=>theme.spacing(3),
            }}
        >
            <Typography 
                variant="h3" 
                component="h1"
                fontWeight={900}
                fontSize="2.25rem"
            >
                {children}
            </Typography>
        </Box>
    )
}
export const Heading2 = ({children}:HeadingProps)=>{
    return (
        <Box
            sx={{
                paddingY:theme=>theme.spacing(2),
            }}
        >
            <Typography 
                variant="h4" 
                component="h2" 
                style={{fontWeight:"bold"}} 
                id={children[0]} 
            >
                {children}
            </Typography>
        </Box>
    )
}
export const Heading3 = ({children}:HeadingProps)=>{
    return (
        <Box 
            sx={{
                paddingY:theme=>theme.spacing(1),
            }}
        >
            <Typography variant="h5" component="h3" style={{fontWeight:"bold"}} >{children}</Typography>
        </Box>
    )
}
export const Heading4 = ({children}:HeadingProps)=>{
    return (
        <Box
            sx={{
                paddingY:theme=>theme.spacing(1),
            }}
        >
            <Typography variant="h6" component="h4" style={{fontWeight:"bold"}} >{children}</Typography>
        </Box>
    )
}