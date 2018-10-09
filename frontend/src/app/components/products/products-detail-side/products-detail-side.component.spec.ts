import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailSideComponent } from './products-detail-side.component';

describe('ProductsDetailSideComponent', () => {
  let component: ProductsDetailSideComponent;
  let fixture: ComponentFixture<ProductsDetailSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDetailSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
