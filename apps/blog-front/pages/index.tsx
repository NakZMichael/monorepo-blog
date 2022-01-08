import { FrontMatter, getParsedFileContentBySlug,} from '@monorepo-blog/markdown';
import { Meta,CardCollection, TopicButton } from '@monorepo-blog/shared/ui';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import { POSTS_PATH } from '../consts/articles';
import { Typography,Box,styled } from '@mui/material';
import { getURL } from 'next/dist/shared/lib/utils';
import { getUrl } from '../utils/domain';

export interface IndexProps{
  frontMatters:FrontMatter[]
}

const introduction = `
ソフトウェアエンジニアです。フロントエンド、バックエンド問わずにコードを書いていますが、比率でいえばフロントエンドのコードを書くことが多いです。小さなチームで働いているのでインフラ業務を担当することもあります。React,TypeScript,Goなどが好きです。Angular,Python,Djangoなどはぼちぼち。最近はWebGLやWebAssemblyに興味あり(全く手をつけていない)。
以前は非平衡統計力学をやっていました。
2022年はエンジニアとしてレベルアップしたい。
`

export function Index(props:IndexProps) {
  return (
    <Root>
      <Meta 
        meta={{
          title:'トップページ',
          siteName:'Nakazatoのブログ',
          link:getURL(),
          desc: 'トップページ',
          image:  getUrl('/images/index-page-meta/index-image.jpg'),
          twitterHandle:`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`
        }}
      />
      <Title>Hi! I&apos;m Nakazato!</Title>
      <IntroductionContainer>
        <Introduction>
          {introduction}
        </Introduction>
      </IntroductionContainer>
      <Articles >
        <Topic>
          Articles
        </Topic>
        <StyledCardCollection 
          cards={props.frontMatters.map((
            {slug,
            ...other}
          )=>({
            ...other,
            link:`/articles/${slug}`
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
    paddingLeft:0,
    paddingRight:0,
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
    paddingBottom:20,
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
