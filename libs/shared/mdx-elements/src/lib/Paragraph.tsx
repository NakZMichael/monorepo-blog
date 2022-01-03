import { Typography } from '@mui//material'
import React from 'react'

type ParagraphProps = {
    children: any
}
export const Paragraph = ({children}:ParagraphProps) => {

    // imgタグをpタグでラップしようとしてくるので対策
    const hasImage = !!children.find(
        (child:any) => child.type?.name === 'CustomImage' 
      )
    if(hasImage){
        return children
    }
    return (
        <Typography variant="body1" component="p" >{children}</Typography>
    )
}