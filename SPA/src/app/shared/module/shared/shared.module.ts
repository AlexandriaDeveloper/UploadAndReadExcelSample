import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { NgxUploaderModule } from 'ngx-uploader';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploaderComponent } from '../../components/file-uploader/file-uploader.component';
import { ExcelBottomSheetComponent } from '../../components/file-uploader/excel-bottom-sheet/excel-bottom-sheet.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../components/file-uploader/dialog/dialog.component';
@NgModule({
  declarations: [
    ExcelBottomSheetComponent,
    FileUploaderComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,

    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxUploaderModule,
  ],
  entryComponents: [DialogComponent],
  exports: [FileUploaderComponent, DialogComponent, ExcelBottomSheetComponent],
})
export class SharedModule {}
