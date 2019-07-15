import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDatabaseComponent } from './database-database.component';

describe('DatabaseDatabaseComponent', () => {
  let component: DatabaseDatabaseComponent;
  let fixture: ComponentFixture<DatabaseDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
