import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateInputPage } from './validate-input.page';

describe('ValidateInputPage', () => {
  let component: ValidateInputPage;
  let fixture: ComponentFixture<ValidateInputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
