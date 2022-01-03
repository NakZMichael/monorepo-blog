import { CodeHighlight } from './CodeHighlight';
import { CustomImage } from './CustomImage';
import { H1, H2, H3, H4,CustomLink } from '@monorepo-blog/shared/ui';
import { Paragraph } from './Paragraph';
import { Youtube } from './youtube/youtube';

export const mdxElements = {
  Youtube,
  a: CustomLink,
  code:CodeHighlight,
  p:Paragraph,
  h1:H1,
  h2:H2,
  h3:H3,
  h4:H4,
  img:CustomImage,
  // pre:function CustomPre(props:any){return <pre>{props.children}</pre>}
};