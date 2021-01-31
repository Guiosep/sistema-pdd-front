import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EapMaintenanceComponent } from './eap-maintenance.component';

describe('EapMaintenanceComponent', () => {
  let component: EapMaintenanceComponent;
  let fixture: ComponentFixture<EapMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EapMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EapMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
