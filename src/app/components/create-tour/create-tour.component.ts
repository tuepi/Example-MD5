import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../models/tour";
import {TourService} from "../../services/tour.service";
import {Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent implements OnInit {
  form: FormGroup = new FormGroup({
      title: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }
  )

  tour : Tour | any;

  constructor(private tourService : TourService,
              private router : Router,
              private toast: NgToastService) { }

  ngOnInit(): void {
  }

  createTour() {
    this.tour = {
      title: this.form.value.title,
      price: this.form.value.price,
      description: this.form.value.description
    }
    this.tourService.createTour(this.tour).subscribe(() => {
      this.toast.success({detail: "THÔNG BÁO", summary: "Thêm thành công",duration: 3000})
      this.router.navigateByUrl('/')
    }, error => {
      this.toast.error({detail: "THÔNG BÁO", summary: "Lỗi",duration: 3000})
      console.log(error);
    });
  }

}
