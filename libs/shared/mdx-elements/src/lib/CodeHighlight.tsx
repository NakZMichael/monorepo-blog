import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';

import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// backgroundを変更できるようにする。
vs2015.hljs.background = 'inherit';

type CodeHighlightProps = {
    inline?:boolean
    children?:React.ReactNode
    node:{
        data?:any
    }
    className?:string
}

const MultiLineContainer = styled(Box)(({theme})=>({
    position:'relative',
    fontSize:theme.typography.body1.fontSize,
    [theme.breakpoints.down('sm')]: {
        fontSize:'0.85rem',
    },
}))

const CopyButton = styled(Button)(({theme})=>({
    position:"absolute",
    top:'0',
    right:'0',
    color:theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
        display:'none',
    },
}))

const StyledSyntaxHighlighter = styled(SyntaxHighlighter as any)(({theme})=>({
    backgroundColor:"transparent !important",
}))

export const CodeHighlight = ({node, inline, children, ...props}:CodeHighlightProps)=>{
    const className = props.className
    const match = /language-([a-zA-Z_0-9^:.-]+)/.exec(className || '');
    const match1 = match?match[1]:'';
    const language = match1.split(':')[0]
    const meta = match1.split(':')[1]; 
    return (
        <CustomMultilineCode
            language={language}
            meta={meta}
            // eslint-disable-next-line react/no-children-prop
            children={String(children).replace(/\n$/, '')} {...props} 
        />
    )

    
    
}

const CustomMultiLineHeader = ({fileName}:{fileName?:string})=>{
    return (
        <Box
            sx={{
                backgroundColor:"#383838",
                borderRadius:"8px 8px 0px 0px",
                height:'20px',
                width:'100%',
                display:'flex',
                justifyItems:'start',
                alignItems:'center',
                position:'relative',
            }}
        >
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(250,74,73)', marginLeft:'10px'}}></div>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(252,182,37)', marginLeft:'10px'}}></div>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(42,203,51)', marginLeft:'10px'}}></div>
            <Typography 
                variant="body2" 
                sx={{
                    color:'rgb(193,193,193)',
                    position:'absolute',
                    display:'block',
                    width:'100%',
                    textAlign:'center',
                }} 
            >
                {fileName?fileName:'Untitled-1'}
            </Typography>
        </Box>
    )
}

const CustomInlineCode = ({children,className,...props}:{
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

const CustomMultilineCode = ({language,children,meta, ...props }:{
    language?:string
    children:React.ReactNode
    meta?:string,
})=>{

    if(meta){
        return(
            <MultiLineContainer>
                <CustomMultiLineHeader fileName={meta} />
                <Box
                    sx={{
                        borderRadius:"0px 0px 8px 8px",
                        backgroundColor:"#232323",
                        padding:theme=>theme.spacing(1),
                        paddingY:theme=>theme.spacing(2),
                        position:"relative",
                        boxShadow:"6px 12px 10px 1px rgba(0, 0, 0, .4);"
                    }}
                >
                    <CopyButton 
                        variant="contained" 
                        color="primary"
                        onClick={()=>{navigator.clipboard.writeText(String(children))}}
                    >
                        Copy
                    </CopyButton>
                    <StyledSyntaxHighlighter
                        style={vs2015} 
                        language={language} 
                        PreTag="div" 
                        // eslint-disable-next-line react/no-children-prop
                        children={String(children).replace(/\n$/, '')} {...props} 
                    />
                </Box>
            </MultiLineContainer>
        )
    }
    return (
        <>
        <CustomMultiLineHeader fileName={undefined} />
        <MultiLineContainer
            sx={
                {
                    borderRadius:"0px 0px 8px 8px",
                    backgroundColor:"#232323",
                    padding: theme=> theme.spacing(1),
                    paddingY:theme => theme.spacing(2),
                    position:"relative",
                    boxShadow:"6px 12px 10px 1px rgba(0, 0, 0, .4);"
                }
            }
        >
                <CopyButton 
                    variant="contained" 
                    color="primary"
                    onClick={()=>{navigator.clipboard.writeText(String(children))}}
                >
                    Copy
                </CopyButton>
                <StyledSyntaxHighlighter
                    style={vs2015} 
                    language={language} 
                    PreTag="div" 
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')} {...props} 
                />
        </MultiLineContainer>
        </>
    )
}
