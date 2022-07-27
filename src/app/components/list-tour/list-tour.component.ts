import { Component, OnInit } from '@angular/core';
import {Tour} from "../../models/tour";
import {TourService} from "../../services/tour.service";

@Component({
  selector: 'app-list-tour',
  templateUrl: './list-tour.component.html',
  styleUrls: ['./list-tour.component.css']
})
export class ListTourComponent implements OnInit {
  tours : Tour[] = [];

  constructor(private tourService : TourService) { }

  ngOnInit(): void {
    this.tourService.getAll().subscribe(result => {
      console.log(result)
      this.tours = result;
    }, error => {
      console.log("Lỗi");
    });
  }

}
