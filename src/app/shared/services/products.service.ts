import { Injectable } from '@angular/core';
import { Iproducts } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray : Array<Iproducts> = [
  {pName: "Samsung 31-A",
   pId: 1,
   pStatus:"In-progress",
    canReturn: 1
  },
  {pName: "Smart Watch",
   pId: 2,
   pStatus:"Dispatched",
   canReturn: 1
  },
  {pName: "Camera",
   pId: 3,
   pStatus:"Delivered",
   canReturn: 0
  }
]
  constructor() { }
  
  getAllProducts():Array<Iproducts>{
    return this.productsArray;
  }
  getSingleProduct(id:number):Iproducts{
    return this.productsArray.find(prod => prod.pId === id)!;
  }
  updateProduct(prodObject:Iproducts){
    return this.productsArray.forEach(prod => {
      if(prod.pId === prodObject.pId){
        prod.pName = prodObject.pName;
        prod.pStatus = prodObject.pStatus
      }
    })
  }
}
