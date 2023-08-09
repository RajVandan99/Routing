import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../model/products';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productId !: number;
productInfo !: Iproducts;
  constructor(private _route:ActivatedRoute,
              private _productService:ProductsService,
              private _router:Router) { }

  ngOnInit(): void {
    // this.productId = +this._route.snapshot.params['id'];
     this._route.params
         .subscribe((myParams:Params) => {
          this.productId = +myParams['id']
          this.productInfo = this._productService.getSingleProduct(this.productId);
         })
  }
  goToEditProduct(){
    this._router.navigate(['/products', this.productId, 'edit'], {queryParamsHandling:"preserve"});
  }

}
