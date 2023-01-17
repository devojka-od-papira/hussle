import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './index';

import styles from './Modal.stories.module.scss';

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
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={handleOpen}>Open modal</button>
      <Modal {...args} handleClose={handleOpen} isOpen={isOpen}>
        {children}
      </Modal>
    </div>
  );
};
export const ModalOpen = Template.bind({});

ModalOpen.args = {
  children: 'Hello',
};
