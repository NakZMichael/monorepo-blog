import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface NestRecord {
  [prop: string]: string | string[] |undefined| NestRecord;
}

export interface FrontMatter extends NestRecord{
  title: string;
  author: {
    name: string
  };
  description?:string,
  image?:string;
  date?: string;
  excerpt?: string;
  tags?: string[];
};

export interface MarkdownDocument {
  frontMatter: FrontMatter;
  content: string;
}

export interface MarkdownRenderingResult {
  frontMatter: FrontMatter;
  html: MDXRemoteSerializeResult;
}