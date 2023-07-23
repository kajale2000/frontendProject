import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinternComponent } from './updateintern.component';

describe('UpdateinternComponent', () => {
  let component: UpdateinternComponent;
  let fixture: ComponentFixture<UpdateinternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateinternComponent]
    });
    fixture = TestBed.createComponent(UpdateinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
