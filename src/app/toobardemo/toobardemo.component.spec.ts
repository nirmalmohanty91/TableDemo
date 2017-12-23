import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobardemoComponent } from './toobardemo.component';

describe('ToobardemoComponent', () => {
  let component: ToobardemoComponent;
  let fixture: ComponentFixture<ToobardemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToobardemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToobardemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
