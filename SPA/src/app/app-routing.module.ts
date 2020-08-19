import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { HomeModule } from './modules/home/home.module';
const routes: Routes = [
  { path: '', component: FileUploadComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
