import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductService } from './product.service';
import { CategoryService} from './category.service';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryListComponent } from './category-list/category-list.component';

const appRoutes: Routes = [
     { path: '', component: ItemListComponent },
     { path: 'category-product/:id', component: ItemListComponent },  
     { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ItemListComponent,
    FormatCurrencyPipe,
    AboutUsComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
