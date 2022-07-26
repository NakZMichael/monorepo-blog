import { GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import { POSTS_PATH } from '../consts/articles';
import { Typography,Box,styled } from '@mui/material';
import { getUrl } from '../lib/utils/domain';
import { introduction } from '../consts/introduction';
import { FrontMatter } from '../lib/markdown/types';
import { getParsedFileContentBySlug } from '../lib/markdown/markdown';
import Meta from '../lib/meta/meta';
import CardCollection from '../lib/card-collection/card-collection';

export interface IndexProps{
  frontMatters:FrontMatter[]
}


export function Index(props: IndexProps) {
  return (
    <Root>
      <Meta 
        meta={{
          title:'トップページ',
          siteName:'Nakazatoのブログ',
          link:getUrl(),
          desc: 'トップページ',
          image:  getUrl('/images/index-page-meta/index-image.jpg'),
          twitterHandle:`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`
        }}
      />
      <IntroductionContainer>
        <Title>Hi! I&apos;m Nakazato!</Title>
        <Introduction>
          {introduction}
        </Introduction>
      </IntroductionContainer>
      <Articles >
        <Typography
          variant='h2'
          sx={{
            mb:2
          }}
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
  width:'max-content',
  maxWidth:'100vw',
  paddingLeft:30,
  paddingRight:30,
  [theme.breakpoints.down('sm')]: {
    paddingLeft:15,
    paddingRight:15,
  },
}))

const Title = styled('h1')(({theme})=>({
  fontSize:'2.75rem',
  fontWeight:700,
}))

const IntroductionContainer = styled(Box)(({theme})=>({
  width:'100%',
  maxWidth:600,
  paddingLeft:15,
  paddingRight:15,
  paddingBottom:16,
}))

const Introduction = styled(Typography)(({theme})=>({
  textAlign:'start',
  width:'100%',
  display:'block',
  whiteSpace:'pre-wrap',
}))

const Topic = styled(Typography)(({theme})=>({
  fontSize:'2.25rem',
  fontWeight:700,
}))

const Articles = styled('div')(({theme})=>({
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
