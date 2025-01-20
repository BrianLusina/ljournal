import { ComponentStory, ComponentMeta } from '@storybook/react';
import config from '@config';
import Header from './Header';

const data = [
  {
    title: 'Work',
  },
  {
    title: 'About',
  },
  {
    title: 'Blog',
  },
];

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: config.title,
  navItems: data.map(({ title }) => ({ title })),
};
