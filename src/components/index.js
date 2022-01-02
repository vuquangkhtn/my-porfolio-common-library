import { Icon } from '@iconify/react';
import Button from './Button/Button';
import Input from './Input/Input';
import TextArea from './Input/TextArea';
import Link from './Link/Link';
import NavBarToggler from './Animated/NavBarToggler';
import confirmPopup from './Confirm/confirmPopup';
import confirmable from './Confirm/confirmable';
import createConfirmation from './Confirm/createConfirmation';

const confirmKit = {
  confirmPopup,
  confirmable,
  createConfirmation
};

export { Button, Input, TextArea, Link, NavBarToggler, Icon, confirmKit };
