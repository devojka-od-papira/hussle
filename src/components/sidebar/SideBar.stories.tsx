import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBar from '../sidebar';

export default {
  title: 'Component/SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar />
);

export const Sidebar = Template.bind({});
