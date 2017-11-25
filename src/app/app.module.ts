import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ProductService } from './product.service';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [
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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
