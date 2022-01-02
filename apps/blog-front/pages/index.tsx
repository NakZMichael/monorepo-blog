import styled from '@emotion/styled';
import { Meta } from '@monorepo-blog/shared/ui';
import Head from 'next/head';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {

  return (
    <StyledPage>
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
      <h1>Hello, Nakazato!</h1>
    </StyledPage>
  );
}

export default Index;
