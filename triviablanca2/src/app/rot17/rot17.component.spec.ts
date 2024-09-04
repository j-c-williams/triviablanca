import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rot17Component } from './rot17.component';

describe('Rot17Component', () => {
  let component: Rot17Component;
  let fixture: ComponentFixture<Rot17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rot17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rot17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
