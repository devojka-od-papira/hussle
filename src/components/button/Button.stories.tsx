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
    onClick: {
      type: 'function',
    },
    children: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

const TemplateTab: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonRed, styles.button)}>
    Sign in
  </Button>
);

const TemplateSignInButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonColor, styles.button)}>
    Sign in
  </Button>
);

const TemplateIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonIcon, styles.button)}>
    <Paperclip color="gray" size={16} />
  </Button>
);

const TemplateIconCircle: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonPlusCircle, styles.button)}>
    <Plus color="white" size={20} />
  </Button>
);

const TemplateIconShadow: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonShadow, styles.button)}>
    <ChevronDown color="gray" size={9} />
  </Button>
);

const TemplateIconDotted: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonDotted, styles.button)}>
    <Plus color="gray" size={9} />
  </Button>
);

const TemplateTextIcon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.textIcon, styles.button)}>
    Add task
    <PlusCircle color="gray" size={16} />
  </Button>
);

export const buttonTab = TemplateTab.bind({});

export const buttonTabColor = TemplateSignInButton.bind({});

export const buttonIcon = TemplateIcon.bind({});

export const buttonIconCircle = TemplateIconCircle.bind({});

export const buttonIconShadow = TemplateIconShadow.bind({});

export const buttonIconDotted = TemplateIconDotted.bind({});

export const buttonTextIcon = TemplateTextIcon.bind({});
