import { Story, Meta } from '@storybook/react';
import { Header, } from './header';

export default {
  component: Header,
  title: 'Header2',
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <div style={{backgroundColor:'gray'}}>
      <Header
        {...args}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
