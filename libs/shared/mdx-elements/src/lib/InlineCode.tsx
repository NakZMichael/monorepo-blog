import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { indigo } from '@material-ui/core/colors';

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
        backgroundColor:theme =>theme.palette.mode === 'light' ?grey[200] : grey[900],
        borderRadius:1,
        fontFamily: 'monospace',
        paddingX: '3px',
        color:theme=>theme.palette.mode === 'light'? theme.palette.common.black:blue[700],
      }}
    >
        {String(children).replace(/\n$/, '')}
    </Typography>
    )
}