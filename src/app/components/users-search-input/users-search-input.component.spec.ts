import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchInputComponent } from './users-search-input.component';

describe('UsersSearchInputComponent', () => {
  let component: UsersSearchInputComponent;
  let fixture: ComponentFixture<UsersSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
