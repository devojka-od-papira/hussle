import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PriorityTag from './index';
import { Priority } from '../../types/global';

export default {
  title: 'Component/PriorityTag',
  component: PriorityTag,
} as ComponentMeta<typeof PriorityTag>;

const TemplateLow: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag priority={Priority.LOW} />
);

const TemplateMedium: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag priority={Priority.MED} />
);

const TemplateHigh: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag priority={Priority.HIGH} />
);

export const PriorityTagLow = TemplateLow.bind({});

export const PriorityTagMed = TemplateMedium.bind({});

export const PriorityTagHigh = TemplateHigh.bind({});
