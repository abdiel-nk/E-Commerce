import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

@Input() product: Product = {
  id:'',
  title: '',
  price: 0,
  images: [],
  category:{
    id: '',
    name:'',
  },
  description: ''
}; 

@Output() addedProduct = new EventEmitter<Product>();
@Output() showProduct = new EventEmitter<string>();
//constructor(){}

//ngOnInit():void{}

onAddToCart(){
  this.addedProduct.emit(this.product);
  }
onShowDetail(){
  this.showProduct.emit(this.product.id);
  }
}
