import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEmailComponent } from './control-email.component';

describe('ControlEmailComponent', () => {
  let component: ControlEmailComponent;
  let fixture: ComponentFixture<ControlEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
