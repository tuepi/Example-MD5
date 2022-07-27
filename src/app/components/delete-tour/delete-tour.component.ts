import {Component, OnInit} from '@angular/core';
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

  id: any;
  tour: Tour | any;

  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

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

  deleteTour() {
    if (confirm("Bạn có muốn xóa không?")) {
      this.tourService.deleteTour(this.id).subscribe(() => {
        this.router.navigateByUrl("/");
        alert("Đã xóa xong!!")
      }, error => {
        console.log(error)
      });
    } else {
      this.router.navigateByUrl("/delete/" + this.id);
    }
  }

}
