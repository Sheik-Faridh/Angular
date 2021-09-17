import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IVaccinationSlot } from 'src/app/@shared/typings/vaccination.typing';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent implements AfterViewInit {
  slots!: IVaccinationSlot[];
  slotsLength = 0;
  displayedColumns: string[] = ['hospital', 'slots'];
  dataSource = new MatTableDataSource<IVaccinationSlot>([]);

  @Input('slots') set setSlots(value: IVaccinationSlot[]) {
    if (value) {
      this.slots = value;
      this.slotsLength = this.slots?.length || 0;
      this.dataSource.data = this.slots.slice(0, 10) || [];
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator?.firstPage();
      }
    }
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPaginate(event: any) {
    const { pageIndex, pageSize } = event;
    const newData = this.slots.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize
    );
    this.dataSource.data = newData;
  }
}
