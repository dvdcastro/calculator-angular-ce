import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {KeyboardComponent} from './keyboard.component';

export default {
  title: 'Calculator Keyboard',
  component: KeyboardComponent,
};

export const DisplayKeys = () => ({
  component: KeyboardComponent,
});
