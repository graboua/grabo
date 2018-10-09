import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../../services/design.service';
import { SharedService } from '../../../services/shared.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { config } from '../../../app.config';

@Component({
  selector: 'app-designs-editor',
  templateUrl: './designs-editor.component.html',
  styleUrls: ['./designs-editor.component.scss']
})
export class DesignsEditorComponent implements OnInit {
  designs: any;
  config = config;

  constructor(
    private designService: DesignService,
    private sharedService: SharedService,

  ) { }

  ngOnInit() {
    this.designService.getDesigns()
      .subscribe(result => this.designs = result.data,
        err => console.log('помилка завантаження дизайнів', err)
      );

    this.sharedService.getSharingEvent().pipe(
      mergeMap(event => {
          if (event[0] !== 'updateDesigns') {
            return of (null);
          } else {
            return this.designService.getDesigns();
          }
      })
    )
      .subscribe(result => this.designs = result.data,
        err => console.log('помилка завантаження дизайнів', err)
      );
  }
}
