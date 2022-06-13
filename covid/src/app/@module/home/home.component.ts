import { Component } from '@angular/core';
import { IVaccinationSlot } from 'src/app/@shared/typings/vaccination.typing';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  vaccinationSlots!: IVaccinationSlot[];

  constructor() {}

  public updateVaccinationSlots(slots: IVaccinationSlot[]) {
    this.vaccinationSlots = slots;
  }
}
