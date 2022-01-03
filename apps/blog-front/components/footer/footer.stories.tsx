import { Story, Meta } from '@storybook/react';
import { Footer, } from './footer';

export default {
  component: Footer,
  title: 'Footer',
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <div style={{backgroundColor:'gray'}}>
      <Footer
        {...args}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
};
