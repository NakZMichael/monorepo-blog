import NextLink from "next/link";
import React from "react";
import {Link as MuiLink, styled} from '@mui/material'
import { blue } from "@material-ui/core/colors";
import { deepPurple, purple } from "@mui/material/colors";

/* eslint-disable-next-line */
export interface ExternalLinkProps {
  href:string;
  children:React.ReactNode
}

export function ExternalLink(props: ExternalLinkProps) {
  return (
    <NextLink href={props.href} passHref>
      <MuiLink
        href={props.href}
        underline="always"
        sx={{
          color: "primary.main",
          textDecorationColor:theme=>theme.palette.primary.main,
          "&:visited": {
            color: "secondary.main",
            textDecorationColor:theme=>theme.palette.secondary.main,
          },
        }}
        target="_blank"
        rel="noopener"
      >
        {props.children}
      </MuiLink>
    </NextLink>
  );
}
export default ExternalLink;
