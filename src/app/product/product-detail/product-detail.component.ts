import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { ProductService } from '../../_models/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private dataService: ProductService) { }

  productId : number | undefined;
  product : any;
  badRequest:boolean = false;
  loaded:boolean = false;

  ngOnInit(): void {
    this.productId = +this.activatedRoute.snapshot.params['id'];
    this.getProduct(this.productId);
  }

  /**
   * Получаем список товаров
   */
  getProduct(id:number) {
    let res = this.dataService.product(id).then(res => {
      this.loaded = true;
      this.product = {
        id: res.id,
        title: res.title,
        price: res.price,
        description: res.description,
      };
      console.log(this.product)
   }).catch((err) => { 
    this.badRequest = true;  
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ошибка выполнения запроса',
        text: err.message,
        showConfirmButton: false,
        timer: 5000
      })
   });
  }
}
