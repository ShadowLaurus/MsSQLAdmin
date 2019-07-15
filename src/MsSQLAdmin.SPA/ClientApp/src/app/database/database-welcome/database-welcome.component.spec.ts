import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseWelcomeComponent } from './database-welcome.component';

describe('DatabaseWelcomeComponent', () => {
  let component: DatabaseWelcomeComponent;
  let fixture: ComponentFixture<DatabaseWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
