import styled from '@emotion/styled';
import { TopicButton } from '@monorepo-blog/shared/ui';

/* eslint-disable-next-line */
export interface TopicsProps {}

const StyledTopics = styled.div`
margin-left: auto;
margin-right: auto;
max-width: 768px;
padding: 5rem;
background-color: #f7fafc;
`;

export function Topics(props: TopicsProps) {
  return (
    <StyledTopics>
      <TopicButton topicName="Next.js" />
    </StyledTopics>
  );
}

{/* <div className="md:container md:mx-auto p-20 bg-gray-100">
      <TopicButton topicName="Next.js" />
    </div> */}

export default Topics;
