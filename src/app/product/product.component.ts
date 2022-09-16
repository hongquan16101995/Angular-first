import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  formProduct!: FormGroup;
  products: Product[] = [];
  i: number = 4;

  constructor(private formGroup: FormBuilder) {
  }

  ngOnInit(): void {
    this.products.push(new Product(1, "Iphone1", 100000, "a"))
    this.products.push(new Product(2, "Iphone2", 200000, "b"))
    this.products.push(new Product(3, "Iphone3", 300000, "c"))
    this.formProduct = this.formGroup.group({
      id: [''],
      name: [''],
      price: [''],
      description: ['']
    });
  }

  displayFormCreate() {
    document.getElementById("form-product")!.hidden = false
    document.getElementById("title")!.innerHTML = "Create new product"
    document.getElementById("submit")!.innerHTML = "Create"
    document.getElementById("reset")!.click()
  }

  createAndUpdateProduct() {
    if (this.formProduct.value.id !== null) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.formProduct.value.id) {
          this.products[i].name = this.formProduct.value.name
          this.products[i].price = this.formProduct.value.price
          this.products[i].description = this.formProduct.value.description
        }
      }
    } else {
      let product = new Product(
        this.i,
        this.formProduct.value.name,
        this.formProduct.value.price,
        this.formProduct.value.description
      )
      this.products.push(product)
      this.i++
    }
    document.getElementById("reset")!.click()
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

  updateProduct(id?: number) {
    document.getElementById("form-product")!.hidden = false
    document.getElementById("title")!.innerHTML = "Update product"
    document.getElementById("submit")!.innerHTML = "Update"
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.formProduct.patchValue(this.products[i])
      }
    }
  }
}
