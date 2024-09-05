import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnciamComponent } from './enciam.component';

describe('EnciamComponent', () => {
  let component: EnciamComponent;
  let fixture: ComponentFixture<EnciamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnciamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnciamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
