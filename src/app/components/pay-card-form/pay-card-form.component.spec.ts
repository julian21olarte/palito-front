import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCardFormComponent } from './pay-card-form.component';

describe('PayCardFormComponent', () => {
  let component: PayCardFormComponent;
  let fixture: ComponentFixture<PayCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
