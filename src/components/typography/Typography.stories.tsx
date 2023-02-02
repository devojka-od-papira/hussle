import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography from './index';
import { TextType } from '../../types';

export default {
  title: 'Component/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const TemplateH1: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="h1" type={TextType.Heading1}>
    Heading 1
  </Typography>
);

const TemplateH2: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="h2" type={TextType.Heading2}>
    Heading 2
  </Typography>
);

const TemplateH3: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="h3" type={TextType.Heading3}>
    Heading 3
  </Typography>
);

const TemplateH4: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="h4" type={TextType.Heading4}>
    Heading 4
  </Typography>
);

const TemplateH5: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="h5" type={TextType.Heading5}>
    Heading 5
  </Typography>
);
const TemplateBodySmall: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="span" type={TextType.BodySmall}>
    Body small
  </Typography>
);
const TemplateDescription: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant="p" type={TextType.Description}>
    Description
  </Typography>
);
export const Heading1 = TemplateH1.bind({});

export const Heading2 = TemplateH2.bind({});

export const Heading3 = TemplateH3.bind({});

export const Heading4 = TemplateH4.bind({});

export const Heading5 = TemplateH5.bind({});

export const BodySmall = TemplateBodySmall.bind({});

export const Description = TemplateDescription.bind({});
