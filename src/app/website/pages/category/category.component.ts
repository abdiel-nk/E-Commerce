import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import{ProductsService} from '.././../../services/products.service';
import{Product} from '../../../models/product.model';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  // Si el código es muy simple
    // templateUrl: '<app-products [products]="products" (onLoadMore)="loadMore()"></app-products>','

  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categoryId: string | null = null;
  limit= 10;
  offset = 0;
  products: Product[] = [];
  productId: string | null = null;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
    )
  {}

  ngOnInit(): void {
      this.route.paramMap
      .pipe(
        switchMap(params=>{
          this.categoryId = params.get('id');
          if (this.categoryId){
              return this.productService.
              getByCategory(this.categoryId, this.limit, this.offset)}
          return [];
        })
      )
      .subscribe(data=>{
        this.products = data;
      });
      this.route.queryParamMap.subscribe(params=>{
          this.productId = params.get('product');
          //console.log(this.productId);
      })
  }

    loadMore(){
    if (this.categoryId){
      this.productService.getByCategory(this.categoryId, this.limit, this.offset)
      .subscribe(data => {
        this.products = this.products.concat(data.filter(product => product.images.length > 0));
        this.offset += this.limit;
      });
    }

  }
}
