import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-i-table',
  templateUrl: './i-table.component.html',
  styleUrls: ['./i-table.component.scss']
})
export class ITableComponent implements OnChanges {
  @Input() items: any[]

  constructor(
  ) { }

  ngOnChanges() {
    console.log('items: ', this.items)
  }
}
