import { Component, OnInit } from '@angular/core';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { Router } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {
dashboardSidenavItems: ICatalog;

  constructor(
    private router: Router,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalogService.getDescendants('dashboard')
      .subscribe(menuItems => {
        this.dashboardSidenavItems = menuItems.data;
      });
  }

}
