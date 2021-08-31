import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoader: boolean = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 3500);
  }
}
