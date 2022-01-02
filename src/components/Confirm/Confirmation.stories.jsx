import React from 'react';
import Button from '../Button/Button';
import confirmPopup from './confirmPopup';

export default {
  title: 'Common/Confirmation',
  component: confirmPopup,
  argTypes: {}
};

const Template = (args) => {
  const handleConfirm = async () => {
    try {
      const confirm = await confirmPopup(args);

      if (confirm) {
        alert('OK');
      } else {
        alert('cancel');
      }
    } catch (e) {
      alert('throw error');
    }
  };
  return (
    <div style={{ display: 'flex' }}>
      <Button onClick={handleConfirm}>Show confirm</Button>
    </div>
  );
};

export const Text = Template.bind({});
Text.args = {
  header: 'Custom Confirm Popup',
  confirmation: 'Do you want to confirm?'
};
