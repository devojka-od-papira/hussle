import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PriorityTag, { Priority } from './index';

export default {
  title: 'Component/PriorityTag',
  component: PriorityTag,
} as ComponentMeta<typeof PriorityTag>;

const TemplateLow: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag priority={Priority.Low} />
);

const TemplateMedium: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag priority={Priority.Med} />
);

const TemplateHigh: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag priority={Priority.High} />
);

export const PriorityTagLow = TemplateLow.bind({});

export const PriorityTagMed = TemplateMedium.bind({});

export const PriorityTagHigh = TemplateHigh.bind({});
