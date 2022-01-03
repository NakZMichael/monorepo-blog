import React from 'react'
import { styled,Box } from '@mui/material'

type CustomImageProps = {
    alt?: string;
    src?: string;
    title?: string;
    children:React.ReactNode
}
const Root = styled(Box)(({theme})=>({
    width:"100%",
    borderRadius:"8px",
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2),
}))



export const CustomImage = (props:CustomImageProps) => { 
    return(
        <Root>
            <img src={props.src} style={{objectFit:"scale-down",width:"100%"}} alt={props.alt} title={props.title} />
        </Root>
    )
}