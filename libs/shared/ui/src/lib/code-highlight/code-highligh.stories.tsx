import { Story, Meta } from '@storybook/react';
import { CodeHighlight, CodeHighlightProps } from './code-highlight';

export default {
  component: CodeHighlight,
  title: 'CodeHighlight',
} as Meta;

const Template: Story<any> = (args) => <CodeHighlight {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  node: undefined,
  inline: undefined,
  children: 'const hoge = 1;\nconsole.log({hoge})\n',
  className: 'language-typescript:Hello.tsx'
};
