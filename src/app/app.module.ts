import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import { MainComponent } from './main/main.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ScreenComponent } from './screen/screen.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    KeyboardComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const calculatorCustomElement = createCustomElement(MainComponent, {injector: this.injector});
    customElements.define('calc-main', calculatorCustomElement);
  }
}
