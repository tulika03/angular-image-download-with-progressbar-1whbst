import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/e/ef/Gentiana_acaulis_%28stemless_gentian%29.jpg';
  percentDone = 0;
  imageSrc: SafeUrl;
  imageName = 'myCustomImageName.jpg';

    downloadFile() {
    return this.http
      .get('http://localhost:3000/api/admin/sku/cover_page/2', {
        responseType: 'blob',
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VyX3R5cGVfaWQiOjEsImlhdCI6MTYzNzU2NjE3MSwiZXhwIjoxNjQyNzUwMTcxfQ.sdergVW5w6Xwd-PLuwkkf9p_9Z7JSrMdVecjZnrGfbk',
        }),
      })
      .subscribe((data) => {
        if (data && data != undefined && data != null) {
          saveAs(data, 'muimage.jpg');
        }
      });
  }
}
