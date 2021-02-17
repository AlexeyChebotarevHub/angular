import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-dz1',
  templateUrl: './dz1.component.html',
  styleUrls: ['./dz1.component.css']
})

export class Dz1Component implements OnInit {
  rows : number = 3;
  products : Array<{id: number, name: string, price: number, category: number}> = [];
  
  categories : Array<{id: number, name: string}> = [
    {id: 1, name:"Категория 1"},
    {id: 2, name:"Категория 2"},
    {id: 3, name:"Категория 3"},
  ];

  constructor() {
    for(let i = 1; i <= this.rows; i++) { this.insert(i); }
    console.log(this.products);
  }

  ngOnInit(): void {}

  categoryCaption(id) {
    var cid = Object.keys(this.categories).find(key => this.categories[key].id === id); 
    return this.categories[cid].name;
  }

  insert(i) {
    this.products.push({ 
      id: i, 
      name : "product " + i, 
      price : (i * 100),
      category: Math.floor(1 + Math.random()*(3 + 1 - 1)),
    });
  }

  insertRow() {
    var i = this.products.length + 1;
    this.insert(i);
  }

  removeRow($event, index) {
    var li = $event.currentTarget.parentElement.parentElement;

    Swal.fire({
      title: 'Удаление',
      text: "Вы желаете удалить запись?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Удалить',
      cancelButtonText: 'Отмена'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(li, index);
        this.products.splice(index, 1);
      }
    });
  }

}
