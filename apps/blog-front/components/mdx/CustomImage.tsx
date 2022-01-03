import React from 'react'
import { Box } from '@mui/material'

type CustomImageProps = {
    alt?: string;
    src?: string;
    title?: string;
    children:React.ReactNode
}

export const CustomImage = (props:CustomImageProps) => { 
    return(
        <Box
            sx={{
                width:"100%",
                borderRadius:"8px",
                marginY:theme=>theme.spacing(2),
            }}
        >
            <img src={props.src} style={{objectFit:"scale-down",width:"100%"}} alt={props.alt} title={props.title} />
        </Box>
    )
}