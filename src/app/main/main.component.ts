import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CalculatorService} from '../calculator.service';
import {MoodleService} from '../moodle.service';

@Component({
  selector: 'calc-main',
  template: `
    <div class="calculator">
      <h1>Calculator</h1>
      <calc-screen [result]="result"></calc-screen>
      <calc-keyboard (keyPressed)="onKeyPressed($event)" [enableFib]="enableFib"></calc-keyboard>
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
  @Input() sessKey: string;
  @Input() wwwRoot: string;
  @Input() enableFib: boolean;

  result: string;

  constructor(
    private calculatorService: CalculatorService,
    private moodleService: MoodleService,
  ) { }

  ngOnInit() {
    this.moodleService.sessKey = this.sessKey;
    this.moodleService.wwwRoot = this.wwwRoot;
  }

  onKeyPressed(key: string) {
    this.calculatorService.calculate(key).subscribe((result) => {
      this.result = result;
    });
  }
}
