import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'calc-keyboard',
  template: `
    <div class="calculator-keyboard container-fluid">
      <div class="row" *ngFor="let row of keyboardModel">
        <button *ngFor="let value of row" [id]="'calc-keyboard-' + getNiceButtonName(value)"
          type="button" class="col btn btn-light" (click)="processKeyPress(value)">{{value}}</button>
      </div>
    </div>
  `,
  styles: [
    `
      .calculator-keyboard button {
        margin: 0.2rem;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class KeyboardComponent implements OnInit {
  @Output() keyPressed = new EventEmitter<string>();

  keyboardModel: string[][];

  constructor() { }

  ngOnInit(): void {
    this.createKeyboardModel();
  }

  processKeyPress(key: string) {
    this.keyPressed.emit(key);
  }

  createKeyboardModel() {
    this.keyboardModel = [
      [
        'AC'
      ],
      [
        '7', '8', '9', '÷',
      ],
      [
        '4', '5', '6', '×',
      ],
      [
        '1', '2', '3', '-',
      ],
      [
        '0', '.', '=', '+',
      ]
    ];
  }

  getNiceButtonName(key: string): string {
    let result = '';
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case 'AC':
        result = key;
        break;
      case '.':
        result = 'dot';
        break;
      case '+':
        result = 'sum';
        break;
      case '-':
        result = 'subtraction';
        break;
      case '÷':
        result = 'division';
        break;
      case '×':
        result = 'multiplication';
        break;
      case '=':
        result = 'equals';
        break;
    }
    return result;
  }
}
