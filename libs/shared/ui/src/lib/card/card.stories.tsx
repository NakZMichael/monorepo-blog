import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title:'高松港の灯台は赤くて綺麗だった',
  image:'/images/test-image.jpg',
  date: '2020-03-16T05:35:07.322Z',
  tags:['Next.js','TypeScript','React'],
};
