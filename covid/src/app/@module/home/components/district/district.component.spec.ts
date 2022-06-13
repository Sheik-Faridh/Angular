import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistrictComponent } from './district.component';
import { StateService } from 'src/app/@shared/service/state/state.service';
import { IStateRes } from 'src/app/@shared/typings/state.typing';
import { of } from 'rxjs';

describe('DistrictComponent', () => {
  let component: DistrictComponent;
  let fixture: ComponentFixture<DistrictComponent>;
  let stateServiceSpy: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('StateService', ['getState']);
    await TestBed.configureTestingModule({
      declarations: [DistrictComponent],
      providers: [{ provide: StateService, useValue: spy }],
    }).compileComponents();
    stateServiceSpy = TestBed.inject(
      StateService
    ) as jasmine.SpyObj<StateService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get list of states', () => {
    const stubValues: IStateRes = {
      ttl: 2,
      states: [
        {
          state_id: 1,
          state_name: 'TamilNadu',
        },
        {
          state_id: 2,
          state_name: 'Karnataka',
        },
      ],
    };
    stateServiceSpy.getState.and.returnValue(of(stubValues));
    stateServiceSpy.getState.calls
      .mostRecent()
      .returnValue.subscribe((stateRes: IStateRes) => {
        component.buildStateOptions(stateRes);
        fixture.detectChanges();
        expect(component.stateOptions).toEqual(
          stubValues.states.map((s) => ({ id: s.state_id, name: s.state_name }))
        );
      });
  });
});
