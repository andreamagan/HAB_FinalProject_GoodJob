import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountPage } from './page/my-account.page';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [UpdateFormComponent, MyAccountPage, FileUploadComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class MyAccountModule { }
