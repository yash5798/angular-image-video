import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList: any = [];
  constructor(private as: AppService) {}
  // ngOnInit() {
  //   this.as.getUsers().subscribe((list: any) => {
  //     this.userList = list.slice(0, 5);
  //   });
  // }
  name = 'Angular ' + VERSION.major;
  url;
  format;
  onFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      let reader = new FileReader();

      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      }
      if (file.type.indexOf('video') > -1) {
        this.format = 'video';
      }

      reader.onload = (event) => {
        this.url = event.target.result;
      };
    }
  }
}
