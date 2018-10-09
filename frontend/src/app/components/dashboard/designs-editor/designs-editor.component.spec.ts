import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsEditorComponent } from './designs-editor.component';

describe('DesignsEditorComponent', () => {
  let component: DesignsEditorComponent;
  let fixture: ComponentFixture<DesignsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
