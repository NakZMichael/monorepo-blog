import { styled,Button } from "@mui/material";

/* eslint-disable-next-line */
export interface HeadingProps {}

export function Heading(props: HeadingProps) {
  return (
    <div>
      <h1>Welcome to Heading!</h1>
      <CustomButton color="primary" variant='contained'  >Hello! </CustomButton>
    </div>
  );
}

const CustomButton = styled(Button)(({theme})=>({
  paddingTop:200,
  position:"absolute",
    top:'0',
    right:'0',
    // color:theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
        display:'none',
    },
}))

export const H1 = styled('h1')(({theme})=>({
  fontSize:'2.75rem',
  fontWeight:700,
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}))
export const H2 = styled('h2')(({theme})=>({
  fontSize:'2.25rem',
  fontWeight:700,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))
export const H3 = styled('h4')(({theme})=>({
  fontSize:'1.8rem',
  fontWeight:700,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}))
export const H4 = styled('h4')(({theme})=>({
  fontSize:'1.6rem',
  fontWeight:700,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}))


export default Heading;
