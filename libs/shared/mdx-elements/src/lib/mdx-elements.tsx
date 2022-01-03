import CustomLink from './custom-link/custom-link';
import { CustomImage } from './CustomImage';
import {H1,H2,H3,H4,CodeHighlight  } from '@monorepo-blog/shared/ui';
import { Youtube } from './youtube/youtube';

export const mdxElements = {
  Youtube,
  a: CustomLink,
  code:CodeHighlight,
  h1:H1,
  h2:H2,
  h3:H3,
  h4:H4,
  img:CustomImage,
  // pre:function CustomPre(props:any){return <pre>{props.children}</pre>}
};