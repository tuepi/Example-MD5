import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tour} from "../../models/tour";
import {TourService} from "../../services/tour.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgToastService} from "ng-angular-popup";

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
              private activatedRoute: ActivatedRoute,
              private toast : NgToastService) {
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
        this.toast.success({detail: "THÔNG BÁO", summary: "Xóa thành công",duration: 3000})
        this.router.navigateByUrl("/");
      }, error => {
        console.log(error)
      });
    } else {
      this.router.navigateByUrl("/delete/" + this.id);
    }
  }

}
