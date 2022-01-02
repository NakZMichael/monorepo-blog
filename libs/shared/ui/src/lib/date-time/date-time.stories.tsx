import { Story, Meta } from '@storybook/react';
import { DateTime, DateTimeProps } from './date-time';

export default {
  component: DateTime,
  title: 'DateTime',
} as Meta;

const Template: Story<any> = (args) => <DateTime {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // children:'2020-03-16',
  dateTime:'2020-03-16T05:35:07.322+09:00'
};
