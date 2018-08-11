import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchOutputComponent } from './users-search-output.component';

describe('UsersSearchOutputComponent', () => {
  let component: UsersSearchOutputComponent;
  let fixture: ComponentFixture<UsersSearchOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSearchOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
