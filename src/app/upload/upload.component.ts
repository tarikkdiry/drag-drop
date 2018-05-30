import { DndComponent } from './../dnd/dnd.component';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Input() uploadField: DndComponent;

  @HostListener('click')
  click() {
    this.uploadField.toggle();
  }
}
