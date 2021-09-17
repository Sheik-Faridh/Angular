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
  liveCountTimer!: number;
  incrementCountTimer!: number | null;

  constructor(private vaccinationService: VaccinationService) {}

  ngOnInit(): void {
    this.liveCountTimer = window.setInterval(() => {
      this.updateVaccinationCount();
    }, 2500);
  }

  private updateVaccinationCount() {
    this.vaccinationService.getVaccinationLiveCount().subscribe(
      (data) => {
        this.clearIncrementCountTimer();
        this.counterAnimation(this.liveCount, data.count);
      },
      (error) => notifyError('livecount_toast', error)
    );
  }

  private counterAnimation(start: number, end: number) {
    if (start === end) return;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    if (range > 2000) {
      if (increment > 0) start = end - 2000;
      else start -= 2000;
      this.liveCount = start;
    }
    this.incrementCountTimer = window.setInterval(() => {
      this.liveCount += increment;
      if (this.liveCount === end) {
        this.clearIncrementCountTimer();
      }
    });
  }

  private clearIncrementCountTimer() {
    if (this.incrementCountTimer) {
      window.clearInterval(this.incrementCountTimer);
      this.incrementCountTimer = null;
    }
  }

  ngOnDestroy() {
    this.liveCountTimer && window.clearInterval(this.liveCountTimer);
  }
}
