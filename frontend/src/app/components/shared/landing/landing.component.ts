import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from '../../../services/catalog.service';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('scrollPoint') scrollPoint: ElementRef;
  config = config;
  descendants: any;

  constructor(
    private catalogService: CatalogService,
    public media: ObservableMedia,
  ) { }

  ngOnInit() {
    this.catalogService.getDescendants('products')
      .subscribe(
        result => this.descendants = result.data,
        err => console.log('mainPageProducts load error', err)
      );
  }

  onScroll() {
    this.scrollPoint.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
