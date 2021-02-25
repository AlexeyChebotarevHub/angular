import { Injectable } from '@angular/core';
import { UiService } from '../../app/_ui/ui.service';
import { HttpClient } from '@angular/common/http';

import { Products, Product } from './Products';
//import {  } from './Product';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  url;
  constructor(svc: UiService, private http: HttpClient) {
    this.url = svc.url;
  }

  products(): Promise<Products> {
    return this.http.get<Products>(this.url('/api/products')).toPromise();
  }
  product(id:number): Promise<Product> {
    return this.http.get<Product>(this.url('/api/product/' + id)).toPromise();
  }
}

