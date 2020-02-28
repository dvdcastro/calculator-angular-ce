import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {ScreenComponent} from './screen.component';

export default {
  title: 'Calculator Screen',
  component: ScreenComponent,
};

export const Text = () => ({
  component: ScreenComponent,
  props: {
    result: 'This should appear on the screen',
  },
});
