import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  public show = false;
  public open = true;
  public buttonName: any = 'Upload';

  constructor() { }

  ngOnInit() {

  }
}
