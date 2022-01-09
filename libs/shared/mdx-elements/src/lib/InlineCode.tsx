import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const InlineCode = ({ children, className, ...props }: {
  children:React.ReactNode,
  className?:string,
})=>{
  return (
    <Typography 
      variant="body1"
      component="code" 
      // HACK: 何故かsxでfontSizeを指定しても効かない
      style={{
        fontSize:'1rem',
      }}
      sx={{
        backgroundColor:grey[200],
        borderRadius:1,
        fontFamily: 'monospace',
        paddingX: '3px',
        // fontSize:'1rem',
      }}
    >
        {String(children).replace(/\n$/, '')}
    </Typography>
    )
}