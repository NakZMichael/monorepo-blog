import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';

import {
  getParsedFileContentBySlug,
  renderMarkdown,
  MarkdownRenderingResult,
} from '@monorepo-blog/markdown';
import { MDXRemote } from 'next-mdx-remote';
import { mdxElements } from '@monorepo-blog/shared/mdx-elements';

/* eslint-disable-next-line */
interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), process.env.articleMarkdownPath);

export const Article:NextPage<MarkdownRenderingResult> = ({
  frontMatter,
  html,
})=> {
  return (
    <div className="md:container md:mx-auto">
      <article>
        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
          {frontMatter.title}
        </h1>
        <div>by { typeof frontMatter.author === 'object' && frontMatter.author.name}</div>
        <hr />

        <MDXRemote {...html} components={mdxElements} />
      </article>
    </div>
  );
}


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
