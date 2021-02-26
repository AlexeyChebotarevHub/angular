import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

import { ProductService } from '@app/_models/product.service';

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
    this.getProduct(+this.activatedRoute.snapshot.params['id']);
  }

  /**
   * Получаем детали по товару
   */
  getProduct(id:number) {
    this.dataService.product(id).subscribe({
      next: response => {
        this.product = response
      },
      error: err => {
        this.badRequest = true;
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Ошибка выполнения запроса',
          text: err.message,
          showConfirmButton: false,
          timer: 5000
        });
      },
      complete: () => this.loaded = true,
    });
  }
}
