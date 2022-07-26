import React from 'react'
import { Typography } from '@mui/material'

type ParagraphProps = {
    children?: any
}

export const Paragraph = ({children}:ParagraphProps) => {
    if (!Array.isArray(children)) {
        const child = children;
        // srcの有無でimgかどうか判断する
        const isImg = !!child.props?.src;
        if (isImg) {
            return child
        }
        return <Typography variant="body1" sx={{paddingY:1}} >{children}</Typography>
    }
    return (
        <Typography variant="body1" sx={{paddingY:1}} >{children}</Typography>
    )
}