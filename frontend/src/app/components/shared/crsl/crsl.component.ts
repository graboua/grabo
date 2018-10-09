import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { config } from '../../../app.config';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-crsl',
  templateUrl: './crsl.component.html',
  styleUrls: ['./crsl.component.scss']
})
export class CrslComponent implements OnInit {
  config = config;
  @ViewChild('stepper') matStepper: MatStepper;
  @ViewChild('stepperHeader') matStepperHeader: MatStepper;
  stepperIndex: number;
  interval: any;

  homeBanner = config.homeBanner;

  constructor(
    public media: ObservableMedia,
  ) { }


  ngOnInit() {
    this.setInterval();
  }

  setInterval() {
    return this.interval = setInterval (() => {

      if (this.matStepper.selectedIndex === this.stepperIndex) {
        this.stepperIndex = this.matStepper.selectedIndex;
        this.matStepper.reset();
      } else {
        this.stepperIndex = this.matStepper.selectedIndex;
        this.matStepper.next();
      }

    }, 4000);
  }
}
