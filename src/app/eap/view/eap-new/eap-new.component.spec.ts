import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EapNewComponent } from './eap-new.component';

describe('EapNewComponent', () => {
  let component: EapNewComponent;
  let fixture: ComponentFixture<EapNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EapNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EapNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
