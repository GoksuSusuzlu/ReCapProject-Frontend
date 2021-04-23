import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carId: number;
  selectedCar: CarDetail;
  carImages: CarImage[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarById(params['carId']);
        this.getCarImages(params['carId']);
      }
    });
  }
  getCarById(carId: number) {
    this.carService.getCarByCarId(carId).subscribe((result) => {
      this.selectedCar = result.data;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((result) => {
      this.carImages = result.data;
    });
  }
}
