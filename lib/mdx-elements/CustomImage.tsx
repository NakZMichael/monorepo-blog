import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

type CustomImageProps = {
    alt?: string;
    src?: string;
    title?: string;
    children?:React.ReactNode
}

export const CustomImage = (props:CustomImageProps) => { 
    return(
        <Box
            sx={{
                width:"100%",
                borderRadius:"8px",
                marginY: theme => theme.spacing(2),
                position:"relative",
            }}
        >
            <Image
                src={props.src || ''}
                layout='fill' objectFit='contain'
                alt={props.alt} title={props.title}
            />
        </Box>
    )
}