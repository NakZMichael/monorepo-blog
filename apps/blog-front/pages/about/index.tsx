import { Box,styled } from '@mui/material';
import { FrontMatter,} from '@monorepo-blog/markdown';
import { Meta } from '@monorepo-blog/shared/ui';


export interface IndexProps{
  frontMatters:FrontMatter[]
}

const introduction = `
ソフトウェアエンジニアです。フロントエンド、バックエンド問わずにコードを書いていますが、比率でいえばフロントエンドのコードを書くことが多いです。小さなチームで働いているのでインフラ業務を担当することもあります。React,TypeScript,Goなどが好きです。Angular,Python,Djangoなどはぼちぼち。最近はWebGLやWebAssemblyに興味あり(全く手をつけていない)。
以前は非平衡統計力学をやっていました。
2022年はエンジニアとしてレベルアップしたい。
`

export function Index(props:IndexProps) {
  console.log({frontMatter:props.frontMatters})
  return (
    <Root>
      <Meta 
        meta={{
          title:'トップページ',
          siteName:'Nakazatoのブログ',
          link:`${process.env.domain}`,
          desc: 'トップページ',
          image: './images/index-page-meta/index-image.jpg',
          twitterHandle:`@${process.env.twitterHandle}`
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
  display:'flex',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center',
  width:'100%',
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
  paddingLeft:15,
  paddingRight:15,
  paddingBottom:20,
}))

const Introduction = styled('p')(({theme})=>({
  textAlign:'start',
  width:'100%',
  display:'block',
  whiteSpace:'pre-wrap',
}));

export default Index;
