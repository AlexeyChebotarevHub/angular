//import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from '@app/_models/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  loaded = false;
  badRequest = false;
  products:any = [];
  count: number = 0;

  constructor(private dataService: ProductService) {}

  /**
   * Добавление товара
   */
  insertProduct() {
    Swal.fire('Добавление товара (потом доделаю)');
  }

  /**
   * Добавление товара
   */
  updateProduct($event:any, id:number) {
    var tr = this.rowByEvent($event);
    console.log(tr, id);
    Swal.fire('Изменение товара (потом доделаю)');
  }

  /**
   * Удаление товара
   */
  deleteProduct($event:any, id:number) {
    var tr = this.rowByEvent($event);
    Swal.fire({
      icon: 'question',
      title: 'Удаление',
      text: 'Удалить товар?',
      showCancelButton: true,
      confirmButtonText: 'Удалить',
      cancelButtonText: 'Отмена',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(tr, id);
        Swal.fire('Удаление товара (потом доделаю)');
      }
    });
  }

  /**
   * Получаем список товаров
   */
  getProducts() {
    this.dataService.products().subscribe({
      next: response => {
        this.products = response.products;
        this.count = response.count;
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

  ngOnInit(): void {
    this.getProducts();
  }

  rowByEvent($event:any) {
    return $event.currentTarget.parentElement.parentElement;
  }
}