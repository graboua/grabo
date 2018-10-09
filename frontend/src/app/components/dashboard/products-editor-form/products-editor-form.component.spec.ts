import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditorFormComponent } from './products-editor-form.component';

describe('ProductsEditorFormComponent', () => {
  let component: ProductsEditorFormComponent;
  let fixture: ComponentFixture<ProductsEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
