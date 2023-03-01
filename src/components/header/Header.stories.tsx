import React, { ChangeEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './index';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    handleSearch: {
      type: 'function',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const HeaderPrimary = Template.bind({});

function handleSearch(e: ChangeEvent<HTMLInputElement>) {

}

HeaderPrimary.args = {
  handleSearch,
};
