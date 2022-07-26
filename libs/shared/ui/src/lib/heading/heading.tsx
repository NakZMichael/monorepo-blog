import { styled,Button, Typography,TypographyProps } from "@mui/material";
import { ReactNode } from "react";

/* eslint-disable-next-line */
export type HeadingProps = {
  children: ReactNode
};

export function Heading(props: HeadingProps) {
  return (
    <div>
      <h1>Welcome to Heading!</h1>
    </div>
  );
}

export const H1 = (props: HeadingProps) => (
  <Typography
    variant="h1"
    {...props}
  />
)
export const H2 = (props: HeadingProps) => (
  <Typography
    variant="h2"
    {...props}
  />
)
export const H3 = (props: HeadingProps) => (
  <Typography
    variant="h3"
    {...props}
  />
)
export const H4 = (props: HeadingProps) => (
  <Typography
    variant="h4"
    {...props}
  />
)

// export const H2 = styled('h2')(({theme})=>({
//   fontFamily:'system-ui, sans-serif',
//   fontSize:'2.25rem',
//   fontWeight:700,
//   paddingTop: theme.spacing(2),
//   paddingBottom: theme.spacing(2),
//   [theme.breakpoints.down('sm')]: {
//     fontSize:'2.0rem',
//     paddingTop: theme.spacing(1.2),
//     paddingBottom: theme.spacing(1.2),
//   },
// }))
// export const H3 = styled('h3')(({theme})=>({
//   fontFamily:'system-ui, sans-serif',
//   fontSize:'1.8rem',
//   fontWeight:700,
//   margin:0,
//   paddingTop: theme.spacing(1),
//   paddingBottom: theme.spacing(1),
//   [theme.breakpoints.down('sm')]: {
//     fontSize:'1.6rem',
//   },
// }))
// export const H4 = styled('h4')(({theme})=>({
//   fontFamily:'system-ui, sans-serif',
//   fontSize:'1.6rem',
//   fontWeight:700,
//   margin:0,
//   paddingTop: theme.spacing(1),
//   paddingBottom: theme.spacing(1),
//   [theme.breakpoints.down('sm')]: {
//     fontSize:'1.4rem',
//   },
// }))


export default Heading;
