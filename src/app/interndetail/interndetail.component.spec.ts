import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterndetailComponent } from './interndetail.component';

describe('InterndetailComponent', () => {
  let component: InterndetailComponent;
  let fixture: ComponentFixture<InterndetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterndetailComponent]
    });
    fixture = TestBed.createComponent(InterndetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
