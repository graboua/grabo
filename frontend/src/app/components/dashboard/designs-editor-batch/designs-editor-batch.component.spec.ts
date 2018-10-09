import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsEditorBatchComponent } from './designs-editor-batch.component';

describe('DesignsEditorBatchComponent', () => {
  let component: DesignsEditorBatchComponent;
  let fixture: ComponentFixture<DesignsEditorBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsEditorBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsEditorBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
