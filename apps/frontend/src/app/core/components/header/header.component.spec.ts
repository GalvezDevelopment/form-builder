import { Breakpoints } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestScheduler } from 'rxjs/testing';
import { SharedModule } from '../../../shared/shared.module';
import { selectXSmall } from '../../services/ui/breakpoint.selectors';
import { AppState } from '../../state/app-state.interface';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore<Partial<AppState>>;
  const initialState: Partial<AppState> = {
    breakpoint: { [Breakpoints.XSmall]: true },
  };
  const testScheduler = new TestScheduler((actual, expected) =>
    expect(actual).toEqual(expected)
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, SharedModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be in X-Small screen', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      store.overrideSelector(selectXSmall, true);
      fixture.detectChanges();
      expectObservable(component.isXSmall$).toBe('a', { a: true });
    });
  });
});
