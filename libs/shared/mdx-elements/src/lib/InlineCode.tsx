import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material';

export const InlineCode = ({ children, className, ...props }: {
  children:React.ReactNode,
  className?:string,
})=>{
  return (
    <Typography 
        variant="body1"
        component="code" 
        sx={{
        color:theme=>theme.palette.common.white,
        backgroundColor:theme=>theme.palette.primary.main,
        borderRadius:"3px",
        fontFamily:'monospace',
        padding:"0px 3px",
        }}
    >
        {String(children).replace(/\n$/, '')}
    </Typography>
    )
}