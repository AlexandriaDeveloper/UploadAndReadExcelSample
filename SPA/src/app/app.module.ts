import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/module/material/material.module';

import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,

    FileUploadComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    FileUploadModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
