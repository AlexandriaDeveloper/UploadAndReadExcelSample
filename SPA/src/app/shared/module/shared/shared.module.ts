import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import {
  FileUploadModule,
  FileSelectDirective,
  FileDropDirective,
} from 'ng2-file-upload';
@NgModule({
  declarations: [],
  imports: [MaterialModule],
  exports: [MaterialModule],
})
export class SharedModule {}
