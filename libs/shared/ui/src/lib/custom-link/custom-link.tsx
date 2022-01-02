import Link from "next/link";
import React from "react";

/* eslint-disable-next-line */
export interface CustomLinkProps {
  href:string;
  children:React.ReactNode
}

export function CustomLink(props: CustomLinkProps) {
  return (
    <Link href={props.href} passHref>
      <a href={props.href}>
        {props.children}
      </a>
    </Link>
  );
}

export default CustomLink;
