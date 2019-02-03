import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-i-pagination',
  templateUrl: './i-pagination.component.html',
  styleUrls: ['./i-pagination.component.scss']
})
export class IPaginationComponent implements OnChanges {
  @Input() perListItemsLength: number
  @Input() totalItemsLength: number
  @Output() onPageChange = new EventEmitter<number>()

  paginations: number[]
  currentPage: number = 1
  

  constructor( 
  ) { 
  }

  ngOnChanges(changes: any) {
    if (!changes['totalItemsLength'].currentValue) {
      return
    }

    this.getTotalPages()
  }

  getTotalPages = () => {
    const paginationsLength = Math.ceil(this.totalItemsLength / this.perListItemsLength)
    this.paginations = Array(paginationsLength).fill(0).map((x, i) => i + 1)
  };

  gotoPage = (pagination: number) => {
    if (pagination === this.currentPage) {
      return
    }

    this.currentPage = pagination
    this.onPageChange.next(pagination)
  }
}
