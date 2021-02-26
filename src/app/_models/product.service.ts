import { Injectable } from '@angular/core';
import { UiService } from '@app/_ui/ui.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private ui: UiService, 
    private http: HttpClient) {}

  products(): Observable<any> {
    return this.http.get(this.ui.url('/api/products'));
      
  }
  
  product(id:number): Observable<any> {
    return this.http.get(this.ui.url('/api/product/' + id));
  }
}

