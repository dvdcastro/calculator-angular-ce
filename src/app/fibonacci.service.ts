import { Injectable } from '@angular/core';
import {MoodleService} from './moodle.service';
import {Observable} from 'rxjs';
import {Result} from './result';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor(
    private moodleService: MoodleService
  ) { }

  fibonacci(n: number): Observable<Result> {
    const args = {
      n
    };

    const methodName = 'local_fibonacci';

    return this.moodleService.service(methodName, args).pipe(
      map(res => this.moodleService.extractData(res))
    );
  }
}
