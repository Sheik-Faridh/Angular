import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IVaccinationSlot } from 'src/app/@shared/typings/vaccination.typing';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent implements OnInit {
  slots!: IVaccinationSlot[];
  slotsLength = 0;
  displayedColumns: string[] = ['hospital', 'slots'];
  dataSource = new MatTableDataSource<IVaccinationSlot>([]);

  @Input('slots') set setSlots(value: IVaccinationSlot[]) {
    this.slots = value;
    this.slotsLength = this.slots?.length || 0;
    this.dataSource.data = this.slots || [];
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
