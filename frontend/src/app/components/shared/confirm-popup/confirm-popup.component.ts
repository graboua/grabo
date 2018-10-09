import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IConfirmPopupData } from '../../../interfaces/interface';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {
  confirmPopupData: IConfirmPopupData;

  constructor(
    public dialogRef: MatDialogRef<ConfirmPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {


  }
  onClose(choice, _id) {
    this.confirmPopupData = {data: {choice, _id}};
    this.dialogRef.close(this.confirmPopupData);
  }
}
