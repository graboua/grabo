import { Component, OnInit } from '@angular/core';
import { config } from '../../../app.config';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  config = config;

  constructor() { }

  ngOnInit() {
  }

}
