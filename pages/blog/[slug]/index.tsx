import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { MDXRemote } from 'next-mdx-remote';

import fs from 'fs';
import { POSTS_PATH } from '../../../consts/articles';
import { Container, Button, Box, styled} from '@mui/material';
import {getUrl} from '../../../lib/utils/domain'
import path from 'path';
import { MarkdownRenderingResult } from '../../../lib/markdown/types';
import { getParsedFileContentBySlug, renderMarkdown } from '../../../lib/markdown/markdown';
import Meta from '../../../lib/meta/meta';
import DateTime from '../../../lib/date-time/date-time';
import { mdxElements } from '../../../lib/mdx-elements/mdx-elements';
import { H1 } from '../../../lib/heading/heading';
import TopicButton from '../../../lib/topic-button/topic-button';

/* eslint-disable-next-line */
interface StaticParams extends ParsedUrlQuery {
  slug: string;
}

interface ArticleProps{
  markdown: MarkdownRenderingResult;
  slug: string;
}


const Article:NextPage<ArticleProps> = ({
  markdown: {
    frontMatter,
    html
  },
  slug,
}) => {
  return (
    <>
    <Meta 
        meta={{
          title: frontMatter.title,
          siteName:'Nakazatoのブログ',
          link:getUrl('blog',slug),
          desc: frontMatter.description,
          image: getUrl(frontMatter.image!),
          twitterHandle:`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`
        }}
        />
    <Container maxWidth="md" >
      <ArticleContainer >
        <Title 
        >
          {frontMatter.title}
        </Title>
        {frontMatter.image &&(
          <TopImageContainer>
            <Image 
              alt={'the top image of this article'} 
              src={frontMatter.image}
              width={1024}
              height={600}
              layout='intrinsic'
              />
          </TopImageContainer>
        )}
        <Box sx={{
          display: 'flex',
          flexWrap:'wrap'
        }}>
          {frontMatter.tags?.map(tag=>(
            <Tag
            key={tag}
            topicName={tag} 
            />
          ))}
        </Box>
        <Box
          sx={{
            display:'flex',
            flexDirection:'column',
            alignItems: 'end',
          }}
          >
          {frontMatter.date &&(
            <DateTime dateTime={frontMatter.date} />
            )}
          <div>by { typeof frontMatter.author === 'object' && frontMatter.author.name}</div>
        </Box>


        <MDXRemote 
          {...html} 
            components={{ ...mdxElements as any}} 
          />
      </ArticleContainer>
    </Container>
    </>
  );
}

const ArticleContainer  = styled('article')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
  }))
  
  const Title = styled(H1)(({theme})=>({
    paddingBottom:'2rem',
    lineHeight:1,
  }))
  
const TopImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow:'hidden',
  maxHeight:400,
  width: '100%',
  marginBottom:theme.spacing(2),
}))
  
  const Tag = styled(TopicButton)(({theme})=>({
    marginRight:theme.spacing(1),
    marginBottom:theme.spacing(1),
  }))
  
  
  export const getStaticProps: GetStaticProps<ArticleProps,StaticParams> = async ({
    params,
  }) => {
  // read markdown file into content and frontmatter
  const articleMarkdownContent = await getParsedFileContentBySlug(
    params!.slug,
    POSTS_PATH
  );
  
  // generate HTML
    const renderedHTML = await renderMarkdown(articleMarkdownContent.content);
      
  return {
    props: {
      markdown: {
        frontMatter: articleMarkdownContent.frontMatter,
        html: renderedHTML,
      },
      slug:params!.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    .filter(path=>path.match(/\.mdx?/))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  

  return {
    paths,
    fallback: false,
  };
};

export default Article;
