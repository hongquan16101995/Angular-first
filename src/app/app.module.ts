import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductTwoFormComponent } from './product-two-form/product-two-form.component';
import { DemoComponent } from './demo/demo.component';
import {RouterModule, Routes} from "@angular/router";
import { StudentsComponent } from './students/students.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product-two', component: ProductTwoFormComponent },
  { path: 'demo', component: DemoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductTwoFormComponent,
    DemoComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
