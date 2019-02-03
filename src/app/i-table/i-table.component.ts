import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-i-table',
  templateUrl: './i-table.component.html',
  styleUrls: ['./i-table.component.scss']
})
export class ITableComponent implements OnInit {
  @Input() items: any[] = []
  @Input() isLoading: boolean = false

  constructor(
  ) { }

  ngOnInit () {
    
  }
}
