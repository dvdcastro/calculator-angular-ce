import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  input: string;

  currentOperand: number;

  currentOperation: string;

  output: string;

  constructor() {
    this.input = '';
    this.currentOperand = NaN;
    this.output = '';
    this.currentOperation = '';
  }

  public calculate(key: string): Observable<string> {
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
        this.input += key;
        this.output = this.input;
        break;
      case '.':
        if (!this.input.includes(key)) {
          this.input += key;
          this.output = this.input;
        }
        break;
      case '+':
      case '-':
      case '÷':
      case '×':
        if (!isNaN(this.currentOperand) && this.currentOperation !== '') {
          this.output = this.doOperation(this.currentOperand, +this.input, this.currentOperation);
        }
        this.input = '';
        this.pushOperation(+this.output, key);
        break;
      case '=':
        if (!isNaN(this.currentOperand) && this.currentOperation !== '') {
          this.output = this.doOperation(this.currentOperand, +this.input, this.currentOperation);
          this.currentOperand = +this.output;
        }
        break;
      case 'AC':
        this.input = '';
        this.currentOperand = NaN;
        this.output = '';
        break;
    }

    return of(this.output);
  }

  private pushOperation(operand: number, operation: string) {
    this.currentOperand = operand;
    this.currentOperation = operation;
  }

  private doOperation(opA: number, opB: number, operation: string): string {
    let result = '';
    switch (operation) {
      case '+':
        result += (opA + opB);
        break;
      case '-':
        result += (opA - opB);
        break;
      case '÷':
        result += (opA / opB);
        break;
      case '×':
        result += (opA * opB);
        break;
      case '=':
        result += opA;
        break;
    }
    return result;
  }
}
