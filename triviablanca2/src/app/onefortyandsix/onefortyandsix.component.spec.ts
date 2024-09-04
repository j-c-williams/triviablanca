import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnefortyandsixComponent } from './onefortyandsix.component';

describe('OnefortyandsixComponent', () => {
  let component: OnefortyandsixComponent;
  let fixture: ComponentFixture<OnefortyandsixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnefortyandsixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnefortyandsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
