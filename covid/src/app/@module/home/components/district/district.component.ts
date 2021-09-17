import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateService } from 'src/app/@shared/service/state/state.service';
import { VaccinationService } from 'src/app/@shared/service/vaccination/vaccination.service';
import {
  IDistrictRes,
  ISelectOption,
  IStateRes,
  SelectStateType,
} from 'src/app/@shared/typings/state.typing';
import { notifyError } from 'src/app/@shared/utils/helper.utils';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss'],
})
export class DistrictComponent implements OnInit {
  loading: boolean = false;
  stateOptions: ISelectOption[] = [];
  stateSelect: SelectStateType = 'normal';
  districtOption: ISelectOption[] = [];
  districtSelect: SelectStateType = 'normal';
  stateId!: string;
  districtId!: string;

  @Output('updateVaccinationSlots') updateVaccinationSlots: EventEmitter<any> =
    new EventEmitter();

  constructor(
    private stateService: StateService,
    private vaccinationService: VaccinationService
  ) {}

  ngOnInit(): void {
    this.stateService.getState().subscribe(
      (data) => {
        this.buildStateOptions(data);
      },
      (error) => {
        notifyError('district_toast', error);
      }
    );
  }

  private buildStateOptions(data: IStateRes) {
    this.stateOptions = data.states.map((d) => ({
      id: d.state_id,
      name: d.state_name,
    }));
  }

  private buildDistrictOption(data: IDistrictRes) {
    this.districtOption = data.districts.map((d) => ({
      id: d.district_id,
      name: d.district_name,
    }));
  }

  public handleStateChange(event: any) {
    this.stateId = event.detail.value;
    if (this.stateId) {
      this.stateSelect = 'normal';
      this.stateService.getDistrictBasedOnState(this.stateId).subscribe(
        (data) => {
          this.buildDistrictOption(data);
        },
        (error) => {
          notifyError('district_toast', error);
        }
      );
    } else this.districtOption = [];
  }

  public handleDistrictChange(event: any) {
    this.districtId = event.detail.value;
    if (this.districtId) this.districtSelect = 'normal';
  }

  public validate(): boolean {
    let isValid = true;
    if (!this.stateId) {
      this.stateSelect = 'error';
      isValid = false;
    }

    if (!this.districtId) {
      this.districtSelect = 'error';
      isValid = false;
    }

    return isValid;
  }

  public handleSearch() {
    this.loading = true;
    const isValid = this.validate();

    if (isValid) {
      this.vaccinationService
        .getVaccinationSlotByEntity(this.districtId, 'District')
        .subscribe(
          (data) => {
            this.updateVaccinationSlots.emit(data.centers);
            this.loading = false;
          },
          (error) => {
            notifyError('district_toast', error);
            this.loading = false;
          }
        );
    }
  }
}
