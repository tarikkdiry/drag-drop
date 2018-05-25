import { Component, OnInit, HostListener } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})

export class DndComponent implements OnInit {
  private fileList: any = []; // initialize array of file names

  constructor() { }

  onFilesChange(file: FileList) {
    this.fileList = file;
    this.fileList.push(file);
  }

  ngOnInit() {

  }
}
