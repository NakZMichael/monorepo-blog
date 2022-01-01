import Link from 'next/link';
import styled from '@emotion/styled';

export interface CustomLinkProps {
  as: string;
  href: string;
}
const StyledCustomLink = styled.div`
  color: pink;
`;

export const CustomLink = ({ as, href, ...otherProps }: CustomLinkProps)=> {
  return (
    <StyledCustomLink>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
    </StyledCustomLink>
  );
}

export default CustomLink;




