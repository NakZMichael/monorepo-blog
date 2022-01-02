import { makeStyles } from "@material-ui/core";
import { DefaultTheme } from "@material-ui/styles";
import {CustomLink} from "@monorepo-blog/shared/ui";
import Link from "next/link";
import {AiOutlineTwitter,AiFillGithub} from "react-icons/ai";

/* eslint-disable-next-line */
export interface FooterProps {}



export const Footer = (props: FooterProps)=> {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.contents} >
        <a href={`https://twitter.com/${process.env.twitterHandle}`}>
          <div className={classes.contentItem}>
              <AiOutlineTwitter size={'1.5rem'} />
              <span className={classes.contentText} >Follow me on Twitter</span>
          </div>
        </a>
        <a href={process.env.githubUrl || ''}>
          <div className={classes.contentItem}>
              <AiFillGithub size={'1.5rem'} />
              <span className={classes.contentText} >Check out my GitHub</span>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding:20,
    display:'flex',
    justifyContent:'center'
  },
  
  contents:{
    marginLeft:'auto',
    marginRight:'auto',
    display:'flex',
    flexDirection:'column'
  },
  contentItem:{
    display:'flex',
    flexDirection:'row',
    marginBottom: theme.spacing(1),
  },
  contentText:{
    marginLeft: theme.spacing(1),
  }
}))
