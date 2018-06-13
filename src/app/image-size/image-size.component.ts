import { Component, OnInit, HostListener, HostBinding, VERSION, ViewChild, ElementRef } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-image-size',
  templateUrl: './image-size.component.html',
  styleUrls: ['./image-size.component.css']
})
export class ImageSizeComponent implements OnInit {
  percentDone: number;
  uploadSuccess: boolean;
  size: any;
  width: number;
  height: number;
  imageType: string;
  imgType: any;

  constructor() { }

  ngOnInit() {
  }

  onChange(evt: any) {
    this.uploadSuccess = true;
    // tslint:disable-next-line:prefer-const
    let image: any = evt.target.files[0];
    this.size = image.size;
    // tslint:disable-next-line:prefer-const
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
     // tslint:disable-next-line:prefer-const
     let img = new Image();
     img.onload = () => {
         this.width = img.width;
         this.height = img.height;
         if (img.width > img.height) {
          this.imageType = 'wide';
         } else if (img.width < img.height) {
          this.imageType = 'tall';
         } else {
           this.imageType = 'square';
         }
     };

     img.src = fr.result; // The data URL
 };

   fr.readAsDataURL(image);
    this.imgType.nativeElement.value = ''; // clear the value after upload
   }
}
