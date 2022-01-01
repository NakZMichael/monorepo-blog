import styled from '@emotion/styled';


export interface YoutubeProps {
  title: string;
  uid: string;
}

const StyledSharedMdxElements = styled.div`
  color: pink;
`;

export function Youtube(props: YoutubeProps) {
  return (
    <StyledSharedMdxElements>
      <div className="youtube-embed">
        <iframe
          src={`https://www.youtube.com/embed/${props.uid}`}
          width="100%"
          height="500px"
          title={props.title}
        ></iframe>
      </div>
    </StyledSharedMdxElements>
  );
}

export default Youtube;
