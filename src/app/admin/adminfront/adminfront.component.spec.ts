import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfrontComponent } from './adminfront.component';

describe('AdminfrontComponent', () => {
  let component: AdminfrontComponent;
  let fixture: ComponentFixture<AdminfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
