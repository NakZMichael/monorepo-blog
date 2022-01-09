import { Box,styled, Typography} from '@mui/material';
import { FrontMatter, getParsedFileContentBySlug,} from '@monorepo-blog/markdown';
import { Meta,CardCollection, } from '@monorepo-blog/shared/ui';
import { GetStaticProps } from 'next';
import fs from 'fs';
import { POSTS_PATH } from '../../consts/articles';
import { getUrl } from '../../utils/domain';

export interface IndexProps{
  frontMatters:FrontMatter[]
}

export function Index(props:IndexProps) {
  return (
    <Root>
      <Meta 
        meta={{
          title:'Blog',
          siteName:'Nakazatoのブログ',
          link:getUrl('blog'),
          desc: 'Blog collection page',
          image:  getUrl('/images/index-page-meta/index-image.jpg'),
          twitterHandle:`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
        }}
      />
      <Articles >
      <Typography
          variant='h2'
        >
          Blog
        </Typography>
        <StyledCardCollection 
          cards={props.frontMatters.map((
            {slug,
            ...other}
          )=>({
            ...other,
            link:`/blog/${slug}`
          }))}
        />
      </Articles>
    </Root>
  );
}

const Root = styled(Box)(({theme})=>({
  display:'flex',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center',
  width:'100%',
  maxWidth:'100vw',
  paddingLeft:30,
  paddingRight:30,
  [theme.breakpoints.down('sm')]: {
    paddingLeft:0,
    paddingRight:0,
  },
}))

const Topic = styled('h2')(({theme})=>({
  fontSize:'2.25rem',
  fontWeight:700,
}))

const Articles = styled(Box)(({theme})=>({
  display:'flex',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center'
}))

const StyledCardCollection = styled(CardCollection)(({theme})=>({
  maxWidth:'calc( 100vw - 60px )',
  [theme.breakpoints.down('sm')]: {
    maxWidth:'100vw',
  },
}))

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .filter(path=>path.match(/\.mdx?/))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ slug}));
  // read markdown file into content and frontmatter
  const frontMatters = await Promise.all(paths.map(async path=>{
    const articleMarkdownContent = await getParsedFileContentBySlug(
      path.slug,
      POSTS_PATH
    );
    return {
      ...articleMarkdownContent.frontMatter,
      slug:path.slug,
    }
  }))

  return {
    props: {
      frontMatters: frontMatters,
    },
  };
};