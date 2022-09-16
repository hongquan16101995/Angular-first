import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../model/product";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demo?: string
  demo_test?: string
  isUnchanged?: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  demo2() {
    this.demo_test = "CodeGym"
    console.log(this.demo_test)
  }
}
