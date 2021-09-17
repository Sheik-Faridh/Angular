import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output('handleSearch') handleSearch: EventEmitter<any> = new EventEmitter();
  @Input('loading') loading!: boolean;

  constructor() {}

  public handleClick() {
    this.handleSearch.emit();
  }
}
