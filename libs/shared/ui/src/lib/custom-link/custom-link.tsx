import NextLink from "next/link";
import React from "react";
import {Link as MuiLink, styled} from '@mui/material'
import { blue } from "@material-ui/core/colors";
import { deepPurple, purple } from "@mui/material/colors";

/* eslint-disable-next-line */
export interface CustomLinkProps {
  href:string;
  children:React.ReactNode
}

export function CustomLink(props: CustomLinkProps) {
  return (
    <NextLink href={props.href} passHref>
      <MuiLink
        href={props.href}
        sx={{
          color: "primary.main",
        }}
      >
        {props.children}
      </MuiLink>
    </NextLink>
  );
}
export default CustomLink;
