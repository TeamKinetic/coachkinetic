import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeIndexComponent } from './admin-home-index.component';

describe('AdminHomeIndexComponent', () => {
  let component: AdminHomeIndexComponent;
  let fixture: ComponentFixture<AdminHomeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
