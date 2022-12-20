import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import styles from './Button.module.scss';

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
    text: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Submit',
  className: styles.buttonColor,
};
