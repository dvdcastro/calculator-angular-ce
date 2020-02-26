import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#calculate should return empty value when using AC',
    (done: DoneFn) => {
      service.calculate('AC').subscribe(value => {
        expect(value).toBe('');
        done();
      });
    });

  it('#calculate should return correct number concatenation numbers and periods',
    (done: DoneFn) => {
      service.calculate('1').subscribe(value => {
        expect(value).toBe('1');
        service.calculate('2').subscribe(value2 => {
          expect(value2).toBe('12');
          service.calculate('.').subscribe(value3 => {
            expect(value3).toBe('12.');
            service.calculate('3').subscribe(value4 => {
              expect(value4).toBe('12.3');
              done();
            });
          });
        });
      });
    });

  it('#calculate should return a sum',
    (done: DoneFn) => {
      service.calculate('1').subscribe(value => {
        expect(value).toBe('1');
        service.calculate('+').subscribe(value2 => {
          expect(value2).toBe('1');
          service.calculate('2').subscribe(value3 => {
            expect(value3).toBe('2');
            service.calculate('=').subscribe(value4 => {
              expect(value4).toBe('3');
              done();
            });
          });
        });
      });
    });

  it('#calculate should return a substraction',
    (done: DoneFn) => {
      service.calculate('3').subscribe(value => {
        expect(value).toBe('3');
        service.calculate('-').subscribe(value2 => {
          expect(value2).toBe('3');
          service.calculate('2').subscribe(value3 => {
            expect(value3).toBe('2');
            service.calculate('=').subscribe(value4 => {
              expect(value4).toBe('1');
              done();
            });
          });
        });
      });
    });

  it('#calculate should return a multiplication',
    (done: DoneFn) => {
      service.calculate('3').subscribe(value => {
        expect(value).toBe('3');
        service.calculate('×').subscribe(value2 => {
          expect(value2).toBe('3');
          service.calculate('2').subscribe(value3 => {
            expect(value3).toBe('2');
            service.calculate('=').subscribe(value4 => {
              expect(value4).toBe('6');
              done();
            });
          });
        });
      });
    });

  it('#calculate should return a division',
    (done: DoneFn) => {
      service.calculate('3').subscribe(value => {
        expect(value).toBe('3');
        service.calculate('÷').subscribe(value2 => {
          expect(value2).toBe('3');
          service.calculate('2').subscribe(value3 => {
            expect(value3).toBe('2');
            service.calculate('=').subscribe(value4 => {
              expect(value4).toBe('1.5');
              done();
            });
          });
        });
      });
    });
});
