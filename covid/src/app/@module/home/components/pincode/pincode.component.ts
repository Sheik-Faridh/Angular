import { Component, Output, EventEmitter } from '@angular/core';
import { VaccinationService } from 'src/app/@shared/service/vaccination/vaccination.service';
import { SelectStateType } from 'src/app/@shared/typings/state.typing';
import { notifyError } from 'src/app/@shared/utils/helper.utils';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss'],
})
export class PincodeComponent {
  loading: boolean = false;
  pincode!: string;
  pincodeInput: SelectStateType = 'normal';

  @Output('updateVaccinationSlots') updateVaccinationSlots: EventEmitter<any> =
    new EventEmitter();

  constructor(private vaccinationService: VaccinationService) {}

  handleChange(event: any) {
    this.pincode = event.detail.value;
  }

  public validate(): boolean {
    let isValid = true;
    if (!this.pincode) {
      this.pincodeInput = 'error';
      isValid = false;
    }

    return isValid;
  }

  public handleSearch() {
    this.loading = true;
    const isValid = this.validate();

    if (isValid) {
      this.vaccinationService
        .getVaccinationSlotByEntity(this.pincode, 'Pincode')
        .subscribe(
          (data) => {
            this.updateVaccinationSlots.emit(data.centers);
            this.loading = false;
          },
          (error) => {
            notifyError('pincode_toast', error);
            this.loading = false;
          }
        );
    }
  }
}
