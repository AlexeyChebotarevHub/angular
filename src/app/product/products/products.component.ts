import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ProductService } from '../../_models/product.service';

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
    let res = this.dataService.products().then(res => {
      this.loaded = true;
      this.products = res.products;
      this.count = res.count;
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

  ngOnInit(): void {
    this.getProducts();
  }

  rowByEvent($event:any) {
    return $event.currentTarget.parentElement.parentElement;
  }
}