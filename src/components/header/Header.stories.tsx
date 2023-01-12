import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './index';

export default {
  title: 'Component/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header />
);

export const HeaderPrimary = Template.bind({});
