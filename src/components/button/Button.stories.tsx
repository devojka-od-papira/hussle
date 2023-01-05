import React from 'react';
import cx from 'classnames';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ChevronDown, Paperclip, Plus, PlusCircle,
} from 'react-feather';
import Button from './index';
import Typography, { TextType } from '../typography';

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
    <Typography variant="h2" type={TextType.Heading2}>
      Sign in
    </Typography>
  </Button>
);

const TemplateSignInButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className={cx(styles.buttonColor, styles.button)}>
    <Typography variant="h2" type={TextType.Heading2}>
      Submit
    </Typography>
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
    <Typography variant="h4">
      Add task
    </Typography>
    <PlusCircle color="gray" size={16} />
  </Button>
);

export const ButtonTab = TemplateTab.bind({});

export const ButtonTabColor = TemplateSignInButton.bind({});

export const ButtonIcon = TemplateIcon.bind({});

export const ButtonIconCircle = TemplateIconCircle.bind({});

export const ButtonIconShadow = TemplateIconShadow.bind({});

export const ButtonIconDotted = TemplateIconDotted.bind({});

export const ButtonTextIcon = TemplateTextIcon.bind({});
