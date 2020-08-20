import { Component, OnInit } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FileUploaderComponent } from './../file-uploader.component';

@Component({
  selector: 'app-excel-bottom-sheet',
  templateUrl: './excel-bottom-sheet.component.html',
  styleUrls: ['./excel-bottom-sheet.component.css'],
})
export class ExcelBottomSheetComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<FileUploaderComponent>
  ) {}

  ngOnInit(): void {}
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
