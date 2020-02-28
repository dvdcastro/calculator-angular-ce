import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {MainComponent} from './main.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {ScreenComponent} from '../screen/screen.component';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Calculator Main',
  component: MainComponent,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [KeyboardComponent, ScreenComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Text = () => ({
  component: MainComponent,
  props: {
    result: 'This should appear on the screen',
  },
});
