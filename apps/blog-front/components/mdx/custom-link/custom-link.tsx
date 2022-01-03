import Link from 'next/link';
import styled from '@emotion/styled';
import { Link as MuiLink,Box } from '@mui/material'

export interface CustomLinkProps {
  as: string;
  href: string;
}


export const CustomLink = ({ as, href, ...otherProps }: CustomLinkProps)=> {
  return (
    <Box>
      <Link as={as} href={href}>
        <MuiLink 
            sx={{
              color: 'rgb(47,0,214)',
              cursor:"pointer",
              textDecoration:"underline",
              display:'inline'
            }}
            target="_blank"
            rel="noopener"
            {...otherProps}
            >
        </MuiLink>
      </Link>
      {/* <Button>Hello!</Button> */}
    </Box>
  );
}

export default CustomLink;




