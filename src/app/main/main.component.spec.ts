import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {KeyboardComponent} from '../keyboard/keyboard.component';
import {ScreenComponent} from '../screen/screen.component';
import {HttpClientModule} from '@angular/common/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        MainComponent,
        KeyboardComponent,
        ScreenComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#onKeyPressed() should update #result with calculation derived from key strokes', () => {
    expect(component.result).toBe(undefined, 'empty at first');
    component.onKeyPressed('1');
    expect(component.result).toBe('1', '1 after onKeyPressed with 1');
    component.onKeyPressed('2');
    expect(component.result).toBe('12', '12 after a second onKeyPressed with 2');
    component.onKeyPressed('+');
    expect(component.result).toBe('12', '12 after onKeyPressed with +');
    component.onKeyPressed('3');
    expect(component.result).toBe('3', '3 after onKeyPressed with 3 after +');
    component.onKeyPressed('=');
    expect(component.result).toBe('15', '15 after onKeyPressed with = after 3');
  });
});
