import { Component, Input } from '@angular/core';
import { IVaccinationSlot } from 'src/app/@shared/typings/vaccination.typing';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  @Input('slots') slots!: IVaccinationSlot[];
  constructor() {}
}
