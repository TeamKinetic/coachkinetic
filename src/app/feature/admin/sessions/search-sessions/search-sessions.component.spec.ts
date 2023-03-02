import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSessionsComponent } from './search-sessions.component';

describe('SearchSessionsComponent', () => {
  let component: SearchSessionsComponent;
  let fixture: ComponentFixture<SearchSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
