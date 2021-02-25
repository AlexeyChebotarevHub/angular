import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  url(path:string) {
    if(path.charAt(0) != '/') { path = '/' + path; }
    return 'http://edu.angular.com' + path;
  }
}
