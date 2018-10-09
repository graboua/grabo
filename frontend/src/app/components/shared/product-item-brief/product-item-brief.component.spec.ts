import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemBriefComponent } from './product-item-brief.component';

describe('ProductItemBriefComponent', () => {
  let component: ProductItemBriefComponent;
  let fixture: ComponentFixture<ProductItemBriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemBriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
