import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements AfterViewInit {
  showLoader: boolean = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 3500);
  }
}
