import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnteteComponent } from './entete';

describe('EnteteComponent', () => {
  let component: EnteteComponent;
  let fixture: ComponentFixture<EnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnteteComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EnteteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
