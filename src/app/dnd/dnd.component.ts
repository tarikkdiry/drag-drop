import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})

export class DndComponent {
  url: any;
  public show = false;
  public open = true;
  public buttonName: any = 'Upload';
  public back = true;
  public upload = false;
  private fileList: any = []; // initialize array of file names

  toggle() {
    this.show = !this.show;

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

  // tslint:disable-next-line:member-ordering
  customStyle = {
    selectButton: {
      'color': 'white',
      'background-color': 'purple',
    }
  };
}
