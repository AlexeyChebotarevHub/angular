import { Injectable } from '@angular/core';

@Injectable()
export class UiService {

  constructor() { }

  url(path:string) {
    if(path.charAt(0) != '/') { path = '/' + path; }
    var host = (window.location.hostname == 'localhost') ? 'http://edu.angular.com' : null;
    return host + path;
  }
}
