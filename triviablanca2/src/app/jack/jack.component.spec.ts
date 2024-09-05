import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackComponent } from './jack.component';

describe('JackComponent', () => {
  let component: JackComponent;
  let fixture: ComponentFixture<JackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
