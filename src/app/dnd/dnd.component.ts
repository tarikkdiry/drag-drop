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
  public back = false;
  private fileList: any = []; // initialize array of file names

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = 'Back';
    } else {
      this.buttonName = 'Upload';
    }

    if (this.open) {
      this.open = false;
      this.back = true;
      this.buttonName = 'Back';
    }
  }

  onFilesChange(file: FileList) {
    this.newMethod(file);
  }

  newMethod(file: FileList) {
    this.fileList = file;
    this.fileList.push(file);
  }
}
