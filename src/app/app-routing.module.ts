import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';


const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: '',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'item',
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
