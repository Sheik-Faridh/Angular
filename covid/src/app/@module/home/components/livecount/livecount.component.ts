import { Component, OnDestroy, OnInit } from '@angular/core';
import { VaccinationService } from 'src/app/@shared/service/vaccination/vaccination.service';
import { notifyError } from 'src/app/@shared/utils/helper.utils';

@Component({
  selector: 'app-livecount',
  templateUrl: './livecount.component.html',
  styleUrls: ['./livecount.component.scss'],
})
export class LivecountComponent implements OnInit, OnDestroy {
  liveCount: number = 0;
  timer!: number;
  constructor(private vaccinationService: VaccinationService) {}

  ngOnInit(): void {
    this.timer = window.setInterval(() => {
      this.updateVaccinationCount();
    }, 3000);
  }

  private updateVaccinationCount() {
    this.vaccinationService.getVaccinationLiveCount().subscribe(
      (data) => {
        this.liveCount = data.count;
      },
      (error) => notifyError('livecount_toast', error)
    );
  }

  ngOnDestroy() {
    this.timer && window.clearInterval(this.timer);
  }
}
