import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseConnectionComponent } from './database-connection.component';

describe('DatabaseConnectionComponent', () => {
  let component: DatabaseConnectionComponent;
  let fixture: ComponentFixture<DatabaseConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
