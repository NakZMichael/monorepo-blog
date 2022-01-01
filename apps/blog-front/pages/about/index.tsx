import styled from '@emotion/styled';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

const StyledAbout = styled.div`
  color: pink;
`;

export const  About:NextPage<AboutProps> = ()=>{
  return (
    <StyledAbout>
      <h1>Welcome to About!</h1>
    </StyledAbout>
  );
}

About.getInitialProps = async(context)=>{
  return {
    name: 'Nakazato'
  }
};

export default About;
