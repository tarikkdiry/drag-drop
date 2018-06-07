import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})

export class DndComponent {
  url: any;
  public show = false; // Boolean for views
  public open = true;
  public buttonName: any = 'Upload'; // Default name for button
  public back = true; // back button
  public upload = false; // upload boolean
  private fileList: any = []; // initialize array of file names
  private inputCaption = false; // caption field boolean

  caption = '';

  toggle() {
    this.show = !this.show;
    this.inputCaption = false;

    if (this.show) {
      this.buttonName = 'Back';
    } else {
      this.buttonName = 'Upload';
    }

    if (this.open) {
      this.open = !this.open;
      this.back = true;
      this.buttonName = 'Back';
    } else {
      this.back = false;
      this.open = true;
    }

    if (this.upload === true) {
      this.upload = true;
      this.back = false;
    } else {
      this.upload = false;
    }
  }

  formToggle(upload) {
    if (upload === true) {
      this.upload = true;
    } else {
      this.upload = false;
    }
  }

  onFilesChange(file: FileList) {
    this.newMethod(file);
  }

  newMethod(file: FileList) {
    this.fileList = file;
    this.fileList.push(file);
  }

  onUploadFinished($event) {
    this.inputCaption = true;
  }

  onRemoved($event) {
    this.inputCaption = false;
  }

  addCaption(event: any) {
    this.caption += event.target.value + ' | ';
    alert(this.caption);
  }

  // tslint:disable-next-line:member-ordering
  customStyle = {
    selectButton: {
      'color': 'blue',
      'background-color': 'purple',
    }
  };
}
