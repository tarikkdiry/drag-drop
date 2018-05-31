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
  private fileList: any = []; // initialize array of file names

  // public selectedFiles;

  // public filesSelect(selectedFiles: Ng4FilesSelected): void {
  //   if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
  //     this.selectedFiles = selectedFiles.status;
  //     return;

  //     // Handle error statuses here
  //   }

  //   this.selectedFiles = Array.from(selectedFiles.files).map(file => file.name);
  // }

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = '';
    } else {
      this.buttonName = 'Upload';
    }

    if (this.open) {
      this.open = false;
    }

  }

  onFilesChange(file: FileList) {
    this.newMethod(file);
  }

  newMethod(file: FileList) {
    this.fileList = file;
    this.fileList.push(file);
  }

  // onSelectFile(event) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {
  //     // tslint:disable-next-line:prefer-const
  //     let reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     // tslint:disable-next-line:no-shadowed-variable
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     };
  //   }
  // }
  // ngOnInit() {

  // }
}
