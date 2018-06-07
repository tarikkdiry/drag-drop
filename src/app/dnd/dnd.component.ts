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
  private showCaptionField = true; // caption field boolean
  public imageCount = 0; // Counts the amount of images being uploaded

  caption = '';

  /*
    Triggered when buttons are pressed, responsible for changing the button titles
  */
  toggle() {
    this.show = !this.show;
    this.showCaptionField = false;

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

  /*
    Opens the caption component
    @param: Event
  */
  onUploadFinished($event) {
    this.showCaptionField = true;
    this.imageCount++;
  }

  /*
    Removes the caption component
    @param: Event
  */
  onRemoved($event) {
    this.showCaptionField = false;
    this.imageCount--;

    // Ensures the caption component is hidden if there are no uploaded posts in preview
    if (this.imageCount > 0) {
      this.showCaptionField = true;
    }
  }

  /*
    Pushes input caption
    @param: Event
  */
  addCaption(event: any) {
    this.caption += event.target.value + ' | ';
    alert(this.caption);
  }

  addText(title: string) {
    console.log(title);
  }

  // tslint:disable-next-line:member-ordering
  customStyle = {
    selectButton: {
      'color': 'white',
      'background-color': 'purple',
    },
    clearButton: {
      'color': 'white',
      'background-color': 'yellow',
    },
    layout: {
      'background-color': 'black',
      'color': 'red',
      'font-size': '15px',
    },
    previewPanel: {
      'background-color': 'red',
    }
  };
}
