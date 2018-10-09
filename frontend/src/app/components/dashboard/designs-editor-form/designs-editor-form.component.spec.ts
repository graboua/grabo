import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsEditorFormComponent } from './designs-editor-form.component';

describe('DesignsEditorFormComponent', () => {
  let component: DesignsEditorFormComponent;
  let fixture: ComponentFixture<DesignsEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
