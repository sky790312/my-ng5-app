import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-i-table',
  templateUrl: './i-table.component.html',
  styleUrls: ['./i-table.component.scss']
})
export class ITableComponent implements OnInit {
  @Input() tweets: Tweet[]

  constructor(
  ) { }

  ngOnInit() {
  }
}
