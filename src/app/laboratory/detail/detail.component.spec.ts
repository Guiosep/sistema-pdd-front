import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryDetailComponent } from './detail.component';

describe('LaboratoryDetailComponent', () => {
  let component: LaboratoryDetailComponent;
  let fixture: ComponentFixture<LaboratoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
