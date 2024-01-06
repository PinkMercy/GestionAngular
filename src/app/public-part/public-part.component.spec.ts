import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPartComponent } from './public-part.component';

describe('PublicPartComponent', () => {
  let component: PublicPartComponent;
  let fixture: ComponentFixture<PublicPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicPartComponent]
    });
    fixture = TestBed.createComponent(PublicPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
