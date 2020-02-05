import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtComponent } from './caught.component';

describe('CaughtComponent', () => {
  let component: CaughtComponent;
  let fixture: ComponentFixture<CaughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
