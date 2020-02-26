import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'calc-keyboard',
  template: `
    <div class="calculator-keyboard container-fluid">
      <div class="row" *ngFor="let row of keyboardModel">
        <button *ngFor="let value of row"
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

}
