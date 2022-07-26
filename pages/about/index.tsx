import { Box,styled } from '@mui/material';
import { getUrl } from '../../lib/utils/domain';
import { introduction } from '../../consts/introduction'
import { FrontMatter } from '../../lib/markdown/types';
import Meta from '../../lib/meta/meta';


export interface IndexProps{
  frontMatters:FrontMatter[]
}


export function Index(props:IndexProps) {
  return (
    <Root>
      <Meta 
        meta={{
          title:'自己紹介',
          siteName:'Nakazatoのブログ',
          link:getUrl('about'),
          desc: '自己紹介',
          image: getUrl('/images/index-page-meta/index-image.jpg'),
          twitterHandle:`@${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`
        }}
      />
      <Title >Hi! I&apos;m Nakazato!</Title>
      <IntroductionContainer>
        <Introduction>
          {introduction}
        </Introduction>
      </IntroductionContainer>
    </Root>
  );
}

const Root = styled(Box)(({theme})=>({
  display: 'flex',
  width:'fit-content',
  alignItems: 'flex-start',
  justifyContent:'center',
  flexDirection:'column',
  maxWidth:'100vw',
  paddingLeft:30,
  paddingRight:30,
  [theme.breakpoints.down('sm')]: {
    paddingLeft:0,
    paddingRight:0,
  },
}))

const Title = styled('h1')(({theme})=>({
  fontSize:'2.75rem',
  fontWeight:700,
}))

const IntroductionContainer = styled(Box)(({theme})=>({
  width:'100%',
  maxWidth:600,
  // paddingLeft:15,
  // paddingRight:15,
  // paddingBottom:20,
}))

const Introduction = styled('p')(({theme})=>({
  textAlign:'start',
  width:'100%',
  display:'block',
  whiteSpace:'pre-wrap',
}));

export default Index;
