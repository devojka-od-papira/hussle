import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { X } from 'react-feather';
import Typography, { TextType } from '../typography';
import Modal from './index';

import styles from './Modal.module.scss';

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {
    children: {

    },
  },
} as ComponentMeta<typeof Modal>;

const Template : ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const { children } = args;
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return isOpen ? <Modal {...args} handleClose={handleOpen} isOpen={isOpen}>{children}</Modal> : <button type="button" onClick={handleOpen}>Open modal</button>;
};
export const ModalOpen = Template.bind({});

ModalOpen.args = {
  children: 'hello',
};
