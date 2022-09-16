import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-two-form',
  templateUrl: './product-two-form.component.html',
  styleUrls: ['./product-two-form.component.css']
})
export class ProductTwoFormComponent implements OnInit {

  formCreateProduct!: FormGroup;
  formUpdateProduct!: FormGroup;
  products: Product[] = [];
  i: number = 4;
  test:boolean = false

  constructor(private formGroup: FormBuilder) {
  }

  ngOnInit(): void {
    this.products.push(new Product(1, "Iphone1", 100000, "a"))
    this.products.push(new Product(2, "Iphone2", 200000, "b"))
    this.products.push(new Product(3, "Iphone3", 300000, "c"))
    this.formCreateProduct = this.formGroup.group({
      id: [''],
      name: [''],
      price: [''],
      description: ['']
    });

    this.formUpdateProduct = this.formGroup.group({
      id: [''],
      name: [''],
      price: [''],
      description: ['']
    });
  }

  createProduct() {
    let product = new Product(
      this.i,
      this.formCreateProduct.value.name,
      this.formCreateProduct.value.price,
      this.formCreateProduct.value.description
    )
    this.products.push(product)
    this.i++
    document.getElementById("reset")!.click()
  }

  updateFormProduct(id?: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.formUpdateProduct.patchValue(this.products[i])
      }
    }
  }

  updateProduct() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === this.formUpdateProduct.value.id) {
        this.products[i].name = this.formUpdateProduct.value.name
        this.products[i].price = this.formUpdateProduct.value.price
        this.products[i].description = this.formUpdateProduct.value.description
      }
    }
    document.getElementById("reset1")!.click()
  }

  deleteProduct(id?: number) {
    if (confirm("Bạn chắc chắn xóa phần tử này?")) {
      let productsUpdate = []
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id !== id) {
          productsUpdate.push(this.products[i])
        }
      }
      this.products = productsUpdate
    }
  }
}
