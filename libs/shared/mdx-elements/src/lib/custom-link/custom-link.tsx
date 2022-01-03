import Link from 'next/link';
import { styled ,Link as MuiLink,Button,Box } from '@mui/material'

export interface CustomLinkProps {
  as: string;
  href: string;
}


export const CustomLink = ({ as, href, ...otherProps }: CustomLinkProps)=> {
  return (
    <Box>
      <Link as={as} href={href}>
        <StyledMuiLink 
            target="_blank"
            rel="noopener"
            {...otherProps}
        />
      </Link>
      <Button>Hello</Button>
    </Box>
  );
}

const StyledMuiLink = styled(MuiLink)(({theme})=>({
  color: 'rgb(47,0,214)',
    cursor:"pointer",
    textDecoration:"underline",
    display:'inline'
}))


export default CustomLink;




