import { Component, Input, OnInit } from '@angular/core';
import { config } from '../../../app.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user-interface';
import { IDesign } from '../../../interfaces/interface';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';
import { DesignService } from '../../../services/design.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/index';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-design-item',
  templateUrl: './design-item.component.html',
  styleUrls: ['./design-item.component.scss']
})
export class DesignItemComponent implements OnInit {
  @Input() design: IDesign;
  config = config;
  edited_id: string;
  user: IUser;


  constructor(
    private matSnackBar: MatSnackBar,
    private userService: UserService,
    private designService: DesignService,
    public dialog: MatDialog,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.userService.getUserLocal()
      .subscribe(
        user => this.user = user
      );
  }

  openDialog(confirmPopupData): void {

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '400px',
      data: confirmPopupData,
    });

    dialogRef.afterClosed().pipe(
      mergeMap(result => {
        if (!result || !result.data.choice) {
          return of(null);
        }
        return this.designService.designDelete(result.data._id);
      }))
        .subscribe(result => {
          this.sharedService.sharingEvent(['updateDesigns']);
          },
          err => console.log('err delete', err)
        );
  }
}
