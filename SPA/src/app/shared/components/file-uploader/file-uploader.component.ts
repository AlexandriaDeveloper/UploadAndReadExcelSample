import {
  Component,
  EventEmitter,
  OnInit,
  ViewChild,
  Input,
} from '@angular/core';

import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExcelBottomSheetComponent } from './excel-bottom-sheet/excel-bottom-sheet.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UploadService } from './../../service/upload.service';

import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],
})
export class FileUploaderComponent implements OnInit {
  @Input('url') url;
  constructor(
    public dialog: MatDialog,
    public NgxUploaderModule: UploadService,
    private _bottomSheet: MatBottomSheet
  ) {}
  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
      data: {
        url: this.url,
      },
    });

    dialogRef.afterClosed().subscribe((x) => console.log(x));
  }
  ngOnInit(): void {}
}
