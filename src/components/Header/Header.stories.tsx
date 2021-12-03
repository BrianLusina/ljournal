import { ComponentStory, ComponentMeta } from '@storybook/react';
import config from '@config';
import Header from './Header';
import data from '../../data/meta';

const { pages, siteDescription } = data;

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: config.title,
  description: siteDescription,
  navItems: pages.map(({ title }) => ({ title: title.toLowerCase() })),
};
