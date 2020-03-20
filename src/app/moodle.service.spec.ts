import { TestBed } from '@angular/core/testing';

import { MoodleService } from './moodle.service';
import {HttpClientModule} from '@angular/common/http';

describe('MoodleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: MoodleService = TestBed.get(MoodleService);
    expect(service).toBeTruthy();
  });
});
