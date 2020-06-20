import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntcvComponent } from './intcv.component';

describe('IntcvComponent', () => {
  let component: IntcvComponent;
  let fixture: ComponentFixture<IntcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
