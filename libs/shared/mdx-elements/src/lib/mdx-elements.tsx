import { CodeHighlight } from './CodeHighlight';
import { CustomImage } from './CustomImage';
import { H1, H2, H3, H4,ExternalLink } from '@monorepo-blog/shared/ui';
import { Paragraph } from './Paragraph';
import { Youtube } from './youtube/youtube';
import { CustomList } from './CustomList';
import { InlineCode } from './InlineCode';
// import { MDXRemote } from 'next-mdx-remote';

export const mdxElements = {
  Youtube,
  a: ExternalLink,
  code: CodeHighlight,
  inlineCode:InlineCode,
  h1:H1,
  h2:H2,
  h3:H3,
  h4: H4,
  li:CustomList,
  img:CustomImage,
  p:Paragraph,
  pre:function CustomPre(props:any){return <pre>{props.children}</pre>}
};