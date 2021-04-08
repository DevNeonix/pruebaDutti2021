import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTwoComponent } from './page-two.component';
describe('PageTwoComponent', () => {
  let component: PageTwoComponent;
  let fixture: ComponentFixture<PageTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PageTwoComponent],
      imports: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
