import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EapDetailComponent } from './eap-detail.component';

describe('EapDetailComponent', () => {
  let component: EapDetailComponent;
  let fixture: ComponentFixture<EapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EapDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
