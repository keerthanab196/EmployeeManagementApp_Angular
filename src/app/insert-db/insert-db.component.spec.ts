import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDBComponent } from './insert-db.component';

describe('InsertDBComponent', () => {
  let component: InsertDBComponent;
  let fixture: ComponentFixture<InsertDBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertDBComponent]
    });
    fixture = TestBed.createComponent(InsertDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
