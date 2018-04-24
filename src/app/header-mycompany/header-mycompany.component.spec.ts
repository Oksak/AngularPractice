import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMycompanyComponent } from './header-mycompany.component';

describe('HeaderMycompanyComponent', () => {
  let component: HeaderMycompanyComponent;
  let fixture: ComponentFixture<HeaderMycompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMycompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
