import { Component, OnInit } from '@angular/core';
import {Tour} from "../../models/tour";
import {TourService} from "../../services/tour.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {

  editForm : FormGroup = new FormGroup({
      title: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }
  )

  id : any;
  tour : Tour | any;

  constructor(private tourService : TourService,
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private toast : NgToastService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      this.id = parammap.get('id');
      this.tourService.getById(this.id).subscribe(data => {
          this.editForm.patchValue({
            title: data.title,
            price: data.price,
            description: data.description
          })
        },
        error => {
          console.log(error);
        });
    });
  }

  editTour() {
    this.tour = {
      title: this.editForm.value.title,
      price: this.editForm.value.price,
      description: this.editForm.value.description
    }
    this.tourService.editTour(this.id, this.tour).subscribe(() => {
      this.toast.success({detail: "THÔNG BÁO", summary: "Sửa thành công",duration: 3000})
      this.router.navigateByUrl("/")
    }, error => {
      console.log(error)
    })
  }


}
