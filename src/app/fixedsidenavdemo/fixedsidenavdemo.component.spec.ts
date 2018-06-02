import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedsidenavdemoComponent } from './fixedsidenavdemo.component';

describe('FixedsidenavdemoComponent', () => {
  let component: FixedsidenavdemoComponent;
  let fixture: ComponentFixture<FixedsidenavdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedsidenavdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedsidenavdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
