import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
productsInfo : Array<Iproducts> = [];
selectedProdId !: number ;
  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsInfo = this._productsService.getAllProducts();
    this.selectedProdId = this.productsInfo[0].pId;
  }

}
