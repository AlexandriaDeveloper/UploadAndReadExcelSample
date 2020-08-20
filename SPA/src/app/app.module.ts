import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material/material.module';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { FileUploaderComponent } from './shared/components/file-uploader/file-uploader.component';
import { ExcelBottomSheetComponent } from './shared/components/file-uploader/excel-bottom-sheet/excel-bottom-sheet.component';
import { DialogComponent } from './shared/components/file-uploader/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
