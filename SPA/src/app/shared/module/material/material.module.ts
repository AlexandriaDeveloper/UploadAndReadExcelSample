import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
})
export class MaterialModule {}
