import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPopupComponent } from './design-popup.component';

describe('DesignPopupComponent', () => {
  let component: DesignPopupComponent;
  let fixture: ComponentFixture<DesignPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
