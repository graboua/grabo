import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  config = config;
  iconFilename: string;
  faviconFilename: string;
  logoFilename: string;

  constructor() { }

  ngOnInit() {
    this.iconFilename = config.gLogo + '.png';
    this.faviconFilename = config.gLogo + '.png';
    this.logoFilename = config.graboLogo + '.png';
  }

}
