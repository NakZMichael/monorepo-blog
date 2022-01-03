import { Story, Meta } from '@storybook/react';
import { CardCollection, CardCollectionProps } from './card-collection';

export default {
  component: CardCollection,
  title: 'CardCollection',
} as Meta;

const Template: Story<CardCollectionProps> = (args) => (
  <CardCollection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cards:[
    {
      title:'高松港の灯台は赤くて綺麗だった',
      image:'/images/test-image.jpg',
      date: '2020-03-16T05:35:07.322Z',
      tags:['Next.js','TypeScript','React'],
    },
    {
      title:'高松港の灯台は赤くて綺麗だった2',
      image:'/images/test-image.jpg',
      date: '2020-03-16T05:35:07.322Z',
      tags:['Next.js','TypeScript',],
    },
    {
      title:'高松港の灯台は赤くて綺麗だった3',
      image:'/images/test-image.jpg',
      date: '2020-03-16T05:35:07.322Z',
      tags:['Next.js','TypeScript','趣味の記事'],
    },
  ]
};
