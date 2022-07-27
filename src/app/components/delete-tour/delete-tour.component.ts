import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../models/tour";
import {TourService} from "../../services/tour.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-tour',
  templateUrl: './delete-tour.component.html',
  styleUrls: ['./delete-tour.component.css']
})
export class DeleteTourComponent implements OnInit {
  deleteForm : FormGroup = new FormGroup({
      title: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
    }
  )

  id : any;
  tour : Tour | any;

  constructor(private tourService : TourService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      this.id = parammap.get('id');
      this.tourService.getById(this.id).subscribe(data => {
          this.deleteForm.patchValue({
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

  deleteTour() {
    this.tourService.deleteTour(this.id).subscribe(() => {
      this.router.navigateByUrl("/")
      alert("Đã xóa xong!!")
    }, error => {
      console.log(error)
    })
  }

}
