import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dz1Component } from './dz1.component';

describe('Dz1Component', () => {
  let component: Dz1Component;
  let fixture: ComponentFixture<Dz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dz1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
