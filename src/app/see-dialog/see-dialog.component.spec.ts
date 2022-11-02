import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDialogComponent } from './see-dialog.component';

describe('SeeDialogComponent', () => {
  let component: SeeDialogComponent;
  let fixture: ComponentFixture<SeeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
