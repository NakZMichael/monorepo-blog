import { styled,Button } from "@mui/material";

/* eslint-disable-next-line */
export interface HeadingProps {}

export function Heading(props: HeadingProps) {
  return (
    <div>
      <h1>Welcome to Heading!</h1>
    </div>
  );
}


export const H1 = styled('h1')(({theme})=>({
  fontFamily:'system-ui, sans-serif',
  fontSize:'2.75rem',
  fontWeight:900,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    fontSize:'2.0rem',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },
}))
export const H2 = styled('h2')(({theme})=>({
  fontFamily:'system-ui, sans-serif',
  fontSize:'2.25rem',
  fontWeight:700,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize:'2.0rem',
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
  },
}))
export const H3 = styled('h4')(({theme})=>({
  fontFamily:'system-ui, sans-serif',
  fontSize:'1.8rem',
  fontWeight:700,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize:'1.6rem',
  },
}))
export const H4 = styled('h4')(({theme})=>({
  fontFamily:'system-ui, sans-serif',
  fontSize:'1.6rem',
  fontWeight:700,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize:'1.4rem',
  },
}))


export default Heading;
