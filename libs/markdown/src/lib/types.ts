import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface NestRecord {
  [prop: string]: string | NestRecord;
}

export type FrontMatter = NestRecord;

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}