import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YubaComponent } from './yuba.component';

describe('YubaComponent', () => {
  let component: YubaComponent;
  let fixture: ComponentFixture<YubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YubaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
