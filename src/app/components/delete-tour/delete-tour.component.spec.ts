import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTourComponent } from './delete-tour.component';

describe('DeleteTourComponent', () => {
  let component: DeleteTourComponent;
  let fixture: ComponentFixture<DeleteTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
