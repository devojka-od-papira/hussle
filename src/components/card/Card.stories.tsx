import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './index';
import { Priority } from '../priorityTag';

export default {
  title: 'Component/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const PriorityCardLow = Template.bind({});
export const PriorityCardMedium = Template.bind({});
export const PriorityCardHigh = Template.bind({});

PriorityCardLow.args = {
  priority: Priority.LOW,
  description: 'Low priority task',
};

PriorityCardMedium.args = {
  priority: Priority.MED,
  description: 'Medium priority task',
};

PriorityCardHigh.args = {
  priority: Priority.HIGH,
  description: 'High priority task',
};
