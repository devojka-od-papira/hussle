import React from 'react';
import cx from 'classnames';
import {
  ChevronDown, Paperclip, Plus, PlusCircle,
} from 'react-feather';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import styles from './Button.stories.module.scss';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    className: {
      type: 'string',
    },
    onClick: {
      type: 'function',
    },
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    Sign in
  </Button>
);

const TemplateIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Paperclip color="gray" size={16} />
  </Button>
);

const TemplateIconCircle: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Plus color="white" size={20} />
  </Button>
);

const TemplateIconShadow: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <ChevronDown color="gray" size={9} />
  </Button>
);

const TemplateIconDotted: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <Plus color="gray" size={9} />
  </Button>
);

const TemplateTextIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    Add task
    <PlusCircle color="gray" size={16} />
  </Button>
);

export const button = Template.bind({});

export const buttonIcon = TemplateIcon.bind({});

export const buttonIconCircle = TemplateIconCircle.bind({});

export const buttonIconShadow = TemplateIconShadow.bind({});

export const buttonIconDotted = TemplateIconDotted.bind({});

export const buttonTextIcon = TemplateTextIcon.bind({});

button.args = {
  className: cx(styles.buttonRed, styles.button),
};

buttonIcon.args = {
  className: cx(styles.buttonIcon, styles.button),
};

buttonIconCircle.args = {
  className: cx(styles.buttonPlusCircle, styles.button),
};

buttonIconShadow.args = {
  className: cx(styles.buttonShadow, styles.button),
};

buttonIconDotted.args = {
  className: cx(styles.buttonDotted, styles.button),
};

buttonTextIcon.args = {
  className: cx(styles.textIcon, styles.button),
};
