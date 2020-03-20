import { TestBed } from '@angular/core/testing';

import { FibonacciService } from './fibonacci.service';
import {HttpClientModule} from '@angular/common/http';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(FibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
