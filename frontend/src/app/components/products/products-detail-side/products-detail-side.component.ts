import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-detail-side',
  templateUrl: './products-detail-side.component.html',
  styleUrls: ['./products-detail-side.component.scss']
})
export class ProductsDetailSideComponent implements OnInit {
  @Input() siblings;
  @Input() category_id;

  constructor() { }

  ngOnInit() {
  }

}
