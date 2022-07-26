import React from 'react';
import { Button,Box,css,styled } from '@mui/material';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
// backgroundを変更できるようにする。
vs2015.hljs.background = 'inherit';


export type CodeHighlightProps = {
    inline?:boolean
    children:React.ReactNode
    node:{
        data?:any
    }
    className?:string
}

const Root = styled(Box)(({theme})=>({
    position:'relative',
    fontSize:theme.typography.body1.fontSize,
    // [theme.breakpoints.down('xs')]: {
    //     fontSize:'0.8rem',
    // },
}))

const InlineCodeText = styled('p')(({theme})=>({
    color:theme.palette.common.white,
    backgroundColor:theme.palette.primary.main,
    borderRadius:"3px",
    fontFamily:'monospace',
    padding:"0px 3px",
}))

const StyledSyntaxHighlighter = styled(SyntaxHighlighter as any)(({theme})=>({
    backgroundColor:"transparent !important",
}))

const MultiLineCodeContainer = styled(Box)(({theme})=>({
    borderRadius:"0px 0px 8px 8px",
    backgroundColor:"#232323",
    padding:theme.spacing(1),
    paddingBottom:theme.spacing(2),
    paddingTop:theme.spacing(2),
    position:"relative",
    boxShadow:"6px 12px 10px 1px rgba(0, 0, 0, .4)",
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.8rem'
    },
}))

const multiLineCodeContainer = css({
    borderRadius:"0px 0px 8px 8px",
    backgroundColor:"#232323",
    padding:8,
    paddingY:16,
    position:"relative",
    boxShadow:"6px 12px 10px 1px rgba(0, 0, 0, .4)",
    md:{
        fontSize: '0.3rem',
    },
    xs:{
        fontSize:'0.1rem',
    }
})

const MultiLinCodeHeader = styled(Box)(({theme})=>({
    backgroundColor:"#383838",
    borderRadius:"8px 8px 0px 0px",
    height:'20px',
    width:'100%',
    display:'flex',
    justifyItems:'start',
    alignItems:'center',
    position:'relative',
}))

const MultiLineCodeFileName = styled('p')(({theme})=>({
    color:'rgb(193,193,193)',
    position:'absolute',
    display:'block',
    width:'100%',
    textAlign:'center',
}))

// const MetaText = styled('p')(({theme})=>({
//     backgroundColor:theme.palette.primary.main,
//     color:theme.palette.common.white,
//     display:"inline-block",
//     padding:"0px 5px",
//     border:"solid 2px #1C1D30",
//     borderBottom:"none",
//     marginLeft:"8px",
//     borderTopLeftRadius:"8px",
//     borderTopRightRadius:"8px",
//     boxShadow:"10px 10px 2px 1px rgba(0, 0, 255, .2);",
//     zIndex:-1
// }))

const CopyButton = styled(Button)(({theme})=>({
    position:"absolute",
    top:'0',
    right:'0',
    color:theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
        display:'none',
    },
}))

export function CodeHighlight({node, inline, children, ...props}:CodeHighlightProps){
    const languageAndFileName = props.className || ''
    const match = /language-(\w+)/.exec(languageAndFileName);
    const language = match?match[1]:'';
    const fileName= languageAndFileName.split(':')[1]
    if(!inline){
        return <CustomMultilineCode
                    language={language}
                    fileName={fileName}
                    children={String(children).replace(/\n$/, '')} {...props} 
                />
    }else{
        return (
            <CustomInlineCode className={languageAndFileName} children={children} {...props} />
        )
    }
    
    
}

const CustomMultiLineHeader = ({fileName}:{fileName?:string})=>{
    return (
        <MultiLinCodeHeader>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(250,74,73)', marginLeft:'10px'}}/>
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(252,182,37)', marginLeft:'10px'}} />
            <div style={{height:'13px',width:'13px',borderRadius:'50%',backgroundColor:'rgb(42,203,51)', marginLeft:'10px'}} />
            <MultiLineCodeFileName >
                {fileName?fileName:'Untitled-1'}
            </MultiLineCodeFileName>
        </MultiLinCodeHeader>
    )
}

const CustomInlineCode = ({children,className,...props}:{
    children:React.ReactNode,
    className?:string,
})=>{
    return (
        <InlineCodeText {...props} >
            String(children).replace(/\n$/, '')
        </InlineCodeText>
        )
    }

const CustomMultilineCode = ({language,children,fileName, ...props }:{
    language?:string
    children:React.ReactNode
    fileName?:string,
})=>{
    return(
        <Root>
            <CustomMultiLineHeader fileName={fileName} />
            <MultiLineCodeContainer>
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
                    children={String(children).replace(/\n$/, '')} {...props} 
                />
            </MultiLineCodeContainer>
        </Root>
    )
}

export default CodeHighlight;