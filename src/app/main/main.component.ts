import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'calc-main',
  template: `
    <div class="calculator">
      <h1>Calculator</h1>
      <calc-screen [result]="result"></calc-screen>
      <calc-keyboard (keyPressed)="onKeyPressed($event)"></calc-keyboard>
    </div>
  `,
  styles: [
    `
      .calculator {
        max-width: 36rem;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  result: string;

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit(): void {
  }

  onKeyPressed(key: string) {
    this.calculatorService.calculate(key).subscribe((result) => {
      this.result = result;
    });
  }
}
