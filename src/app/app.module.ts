import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileUploadModule } from 'angular-file-uploader';
import { FileDropModule } from 'ngx-file-drop';
import { DndComponent } from './dnd/dnd.component';
import { DndDirective } from './dnd/dnd.directive';
// import { UploadComponent } from './upload/upload.component';
import { PictureComponent } from './picture/picture.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { UploadFormComponent } from './upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DndDirective,
    // UploadComponent,
    PictureComponent,
    UploadFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileDropModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
