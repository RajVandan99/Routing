import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproducts } from '../model/products';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGaurdService implements Resolve<Iproducts> {
  constructor(
    private _productService:ProductsService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproducts | Observable<Iproducts> | Promise<Iproducts> {
  let productId:number = +route.params['id']
    return this._productService.getSingleProduct(productId)
  }
}
