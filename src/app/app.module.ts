import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileUploadModule } from 'angular-file-uploader';
import { FileDropModule } from 'ngx-file-drop';
import { DndComponent } from './dnd/dnd.component';
import { DndDirective } from './dnd/dnd.directive';
import { UploadComponent } from './upload/upload.component';
import { PictureComponent } from './picture/picture.component';


@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DndDirective,
    UploadComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
