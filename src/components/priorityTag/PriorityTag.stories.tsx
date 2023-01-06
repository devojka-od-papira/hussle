import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PriorityTag, { Priority } from './index';

export default {
  title: 'Component/PriorityTag',
  component: PriorityTag,
} as ComponentMeta<typeof PriorityTag>;

const TemplateLow: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag>
    {Priority.Low}
  </PriorityTag>
);

const TemplateMedium: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag>
    {Priority.Med}
  </PriorityTag>
);

const TemplateHigh: ComponentStory<typeof PriorityTag> = (args) => (
  <PriorityTag>
    {Priority.High}
  </PriorityTag>
);

export const PriorityTagLow = TemplateLow.bind({});

export const PriorityTagMed = TemplateMedium.bind({});

export const PriorityTagHigh = TemplateHigh.bind({});
