import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTwoFormComponent } from './product-two-form.component';

describe('ProductTwoFormComponent', () => {
  let component: ProductTwoFormComponent;
  let fixture: ComponentFixture<ProductTwoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTwoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTwoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
