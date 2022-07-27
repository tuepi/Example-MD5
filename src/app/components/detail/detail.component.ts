import { Component, OnInit } from '@angular/core';
import {Tour} from "../../models/tour";
import {TourService} from "../../services/tour.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id : any;
  tour : Tour | any;

  constructor(private tourService : TourService,
              private activatedRoute : ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(parammap => {
      this.id = parammap.get('id');
      this.tourService.getById(this.id).subscribe(data => {
          this.tour = data;
        },
        error => {
          console.log(error);
        });
    });
  }

}
