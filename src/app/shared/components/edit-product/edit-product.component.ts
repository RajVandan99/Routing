import { Component, OnInit } from '@angular/core';
import { IpStatus, Iproducts } from '../../model/products';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
productId !: number;
selectedProduct !: Iproducts;
canEdit !: number;
  constructor(private _route:ActivatedRoute,
              private _productsService:ProductsService,
              private _router:Router) { }

  ngOnInit(): void {
    this.productId = +this._route.snapshot.params['id'];
    this.selectedProduct = this._productsService.getSingleProduct(this.productId);
    this._route.queryParams
        .subscribe((queryParams:Params) => this.canEdit = +queryParams['canEdit'])
  }
  onProductUpdate(pName:HTMLInputElement, pStatus:HTMLSelectElement){
      let obj : Iproducts = {
      pName:pName.value,
      pId: this.productId,
      pStatus:pStatus.value as IpStatus,
      canReturn: this.selectedProduct.canReturn
      }
  this._productsService.updateProduct(obj);
  this._router.navigate(['/products', this.productId])
  }

}
