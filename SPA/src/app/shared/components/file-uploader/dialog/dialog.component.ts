import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UploadService } from 'src/app/shared/service/upload.service';
import { forkJoin, fromEvent } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExcelBottomSheetComponent } from './../excel-bottom-sheet/excel-bottom-sheet.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @ViewChild('file', { static: false }) file;

  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  public files: Set<File> = new Set();
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private _bottomSheet: MatBottomSheet,
    public uploadService: UploadService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files[0] = files[key];
        this.uploadFile();
      }
    }

    //open bottonsheet here
  }

  addFiles() {
    this.file.nativeElement.click();
    //  this.uploadFile();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  uploadFile() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map

    this.progress = this.uploadService.upload(this.files, this.data.url);

    // tslint:disable-next-line: forin
    for (const key in this.progress) {
      this.progress[key].progress.subscribe((val) => {
        console.log(val);
      });
    }

    // convert the progress map into an array
    const allProgressObservables = [];
    // tslint:disable-next-line: forin
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = true;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(
      (end) => {
        // ... the dialog can be closed again...
        this.canBeClosed = true;
        this.dialogRef.disableClose = false;

        // ... the upload was successful...
        this.uploadSuccessful = true;

        // ... and the component is no longer uploading
        this.uploading = false;
      },
      (err) => {
        console.log(err), () => {};
      },
      () => {
        this.openBottomSheet();
      }
    );
  }
  openBottomSheet(): void {
    this._bottomSheet.open(ExcelBottomSheetComponent, { data: {} });
  }
}
