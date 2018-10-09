import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrslComponent } from './crsl.component';

describe('CrslComponent', () => {
  let component: CrslComponent;
  let fixture: ComponentFixture<CrslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
