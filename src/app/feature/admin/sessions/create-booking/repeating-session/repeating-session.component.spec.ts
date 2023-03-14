import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingSessionComponent } from './repeating-session.component';

describe('RepeatingSessionComponent', () => {
  let component: RepeatingSessionComponent;
  let fixture: ComponentFixture<RepeatingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatingSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
