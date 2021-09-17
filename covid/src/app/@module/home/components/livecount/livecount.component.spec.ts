import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecountComponent } from './livecount.component';

describe('LivecountComponent', () => {
  let component: LivecountComponent;
  let fixture: ComponentFixture<LivecountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivecountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
