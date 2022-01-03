import { Box, SxProps, Theme } from "@mui/material";
import { styled } from "@mui/system";
import { CSSProperties } from "react";
import {AiOutlineTwitter,AiFillGithub} from "react-icons/ai";

/* eslint-disable-next-line */
export interface FooterProps {
  className?:string;
  style:CSSProperties;
  sx?: SxProps<Theme>;
}

export const Footer = (props: FooterProps)=> {
  return (
    <FooterContainer
      className={props.className}
      style={props.style}
      sx={props.sx}
    >
      <Box
        sx={{
          marginX:'auto',
          display:'flex',
          flexDirection:'column'
        }}
      >
        <a href={`https://twitter.com/${process.env.twitterHandle}`}>
          <ContentItem>
              <AiOutlineTwitter size={'1.5rem'} />
              <ContentText>Follow me on Twitter</ContentText>
          </ContentItem>
        </a>
        <a href={process.env.githubUrl || ''}>
          <ContentItem>
              <AiFillGithub size={'1.5rem'} />
              <ContentText>Check out my GitHub</ContentText>
          </ContentItem>
        </a>
      </Box>
    </FooterContainer>
  );
}

const FooterContainer = styled('footer')(({theme})=>({
  backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding:20,
    display:'flex',
    justifyContent:'center'
}))

const ContentItem = styled('div')(({theme})=>({
  display:'flex',
  flexDirection:'row',
  marginBottom: theme.spacing(1),
}))

const ContentText = styled('div')(({theme})=>({
  marginLeft: theme.spacing(1),
}))


export default Footer;
