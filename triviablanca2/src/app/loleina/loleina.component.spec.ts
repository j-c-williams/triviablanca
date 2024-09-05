import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoleinaComponent } from './loleina.component';

describe('LoleinaComponent', () => {
  let component: LoleinaComponent;
  let fixture: ComponentFixture<LoleinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoleinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoleinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
