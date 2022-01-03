import { CodeHighlight } from './CodeHighlight';
import CustomLink from './custom-link/custom-link';
import { CustomImage } from './CustomImage';
import { Heading1, Heading2, Heading3, Heading4 } from './Headings';
import { Youtube } from './youtube/youtube';

export const mdxElements = {
  Youtube,
  a: CustomLink,
  code:CodeHighlight,
  h1:Heading1,
  h2:Heading2,
  h3:Heading3,
  h4:Heading4,
  img:CustomImage,
  // pre:function CustomPre(props:any){return <pre>{props.children}</pre>}
};