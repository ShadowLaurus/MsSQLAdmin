import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSqlComponent } from './database-sql.component';

describe('DatabaseSqlComponent', () => {
  let component: DatabaseSqlComponent;
  let fixture: ComponentFixture<DatabaseSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
