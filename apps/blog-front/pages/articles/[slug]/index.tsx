import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';

import {
  getParsedFileContentBySlug,
  renderMarkdown,
  MarkdownRenderingResult,
} from '@monorepo-blog/markdown';
import { MDXRemote } from 'next-mdx-remote';
import { mdxElements } from '@monorepo-blog/shared/mdx-elements';
import { POSTS_PATH } from '../../../consts/articles';
import { Container, Button, Box, styled} from '@mui/material';

/* eslint-disable-next-line */
interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const Article:NextPage<MarkdownRenderingResult> = ({
  frontMatter,
  html,
})=> {
  // console.log({html})
  return (
    <Container maxWidth="sm" >
      <ArticleContainer >
        <Title 
        >
          {frontMatter.title}
        </Title>
        <div>by { typeof frontMatter.author === 'object' && frontMatter.author.name}</div>
        <hr />

        <MDXRemote 
          {...html} 
          components={mdxElements} 
          />
      </ArticleContainer>
    </Container>
  );
}

const ArticleContainer  = styled('article')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
}))

const Title = styled('h1')(({theme})=>({
  fontSize:'2.5rem',
  fontWeight:900,
  paddingBottom:'2rem',
}))


export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  // read markdown file into content and frontmatter
  const articleMarkdownContent = await getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  // generate HTML
  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHTML,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
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
