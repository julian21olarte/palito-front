import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTransferFormComponent } from './pay-transfer-form.component';

describe('PayTransferFormComponent', () => {
  let component: PayTransferFormComponent;
  let fixture: ComponentFixture<PayTransferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTransferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
