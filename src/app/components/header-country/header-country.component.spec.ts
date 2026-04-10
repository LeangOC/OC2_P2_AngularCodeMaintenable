import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCountryComponent } from './header-country.component';

describe('HeaderCountryComponent', () => {
  let component: HeaderCountryComponent;
  let fixture: ComponentFixture<HeaderCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
