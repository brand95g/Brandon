import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
}

export class Product {
  id: number;
  name: string;
  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
  }
}