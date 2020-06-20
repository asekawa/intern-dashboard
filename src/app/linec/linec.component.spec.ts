import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinecComponent } from './linec.component';

describe('LinecComponent', () => {
  let component: LinecComponent;
  let fixture: ComponentFixture<LinecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
