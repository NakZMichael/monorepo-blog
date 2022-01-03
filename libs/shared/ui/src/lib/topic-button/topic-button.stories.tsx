import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { TopicButton, TopicButtonProps } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as Meta;

const Template: Story<TopicButtonProps> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>(null);
  return (
    <div style={{backgroundColor:'grey', padding:30}}>
      <TopicButton
        {...args}
        onClick={(topicName) => setClickedTopic(topicName)}
      />
      {clickedTopic && (
        <div data-testid="click-result">
          Button has been clicked: {clickedTopic}
        </div>
      )}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Next.js',
};
export const TypeScript = Template.bind({});
TypeScript.args = {
  topicName: 'TypeScript',
};
export const Hobby = Template.bind({});
Hobby.args = {
  topicName: '趣味',
};
