import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PageOneComponent} from './page-one.component';
import {CharacterDetailComponent} from "../../components/character-detail/character-detail.component";

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PageOneComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
