import {promises as fs} from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MarkdownDocument } from './types';
import { serialize } from 'next-mdx-remote/serialize';
import { FrontMatter } from '..';

export const getParsedFileContentBySlug = async (
  slug: string,
  postsPath: string
):Promise<MarkdownDocument> => {

  const postFilePath = join(postsPath, `${slug}.mdx`);
  const fileContents = await fs.readFile(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatter,
    content,
  };
};

export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || '');
};