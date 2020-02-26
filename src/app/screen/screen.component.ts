import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'calc-screen',
  template: `
    <pre class="alert alert-light border w-100 calculator-result">{{result}}</pre>
  `,
  styles: [
    `
      .calculator-result {
        height: 4rem;
        font-size: 100%;
        text-align: right;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class ScreenComponent implements OnInit {
  @Input() result: string;

  constructor() { }

  ngOnInit(): void {
  }

}
