import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSearcherComponent } from './design-searcher.component';

describe('DesignSearcherComponent', () => {
  let component: DesignSearcherComponent;
  let fixture: ComponentFixture<DesignSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
