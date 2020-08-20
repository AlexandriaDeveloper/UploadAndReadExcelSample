import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from './../../shared/module/shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
/*
ERROR in ./src/app/shared/module/shared/shared.module.ts
Module not found: Error: Can't resolve 'ng2-file-upload/file-upload/file-upload.module' in 'E:\Projects\SampleExcelFileUpload\UploadAndReadExcelSample\spa\src\app\shared\module\shared'

    ERROR in src/app/shared/module/shared/shared.module.ts:8:18 - error NG6001: Cannot declare 'FileDropDirective' in an NgModule as it's not a part of the current compilation. */
