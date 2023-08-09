import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProductComponent } from './shared/components/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';
import { EditUserComponent } from './shared/components/edit-user/edit-user.component';

const routes: Routes = [
  {path: "" , component: DashboardComponent},
  // {path: " " , redirectTo:"home", pathMatch:"full"},
  // {path: "home", component: DashboardComponent},
  {path: "users", component: UsersComponent},
  {path: "users/:id", component: UserComponent},
  {path: "users/:id/edit", component: EditUserComponent},
  {path: "products", component: ProductsComponent},
  {path: "products/:id", component: ProductComponent},
  {path: "products/:id/edit", component: EditProductComponent},
  {path:"pageNotFound", component: PageNotFoundComponent},
  {path: "**", redirectTo: "pageNotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
