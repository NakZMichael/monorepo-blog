import { grey } from "@material-ui/core/colors";
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
    <Box
      component="footer"
      className={props.className}
      style={props.style}
      sx={{
        // backgroundColor: theme.palette.primary.main,
        color: grey[600],
        padding:2,
        display:'flex',
        justifyContent: 'center',
        borderTop: 1,
        borderColor: grey[400],
        marginX:2,
        ...props.sx
      }}
    >
      <Box
        sx={{
          marginX:'auto',
          display:'flex',
          flexDirection:'column'
        }}
      >
        <a href={`https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`}>
          <ContentItem>
              <AiOutlineTwitter size={'1.5rem'} />
              <ContentText>Follow me on Twitter</ContentText>
          </ContentItem>
        </a>
        <a href={process.env.NEXT_PUBLIC_GITHUB_URL || ''}>
          <ContentItem>
              <AiFillGithub size={'1.5rem'} />
              <ContentText>Check out my GitHub</ContentText>
          </ContentItem>
        </a>
      </Box>
    </Box>
  );
}

const FooterContainer = styled('footer')(({theme})=>({
  backgroundColor: theme.palette.primary.main,
    color: grey[600],
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
