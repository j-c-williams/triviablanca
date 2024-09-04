import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanComponent } from './jan.component';

describe('JanComponent', () => {
  let component: JanComponent;
  let fixture: ComponentFixture<JanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
