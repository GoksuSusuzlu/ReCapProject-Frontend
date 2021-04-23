import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path: "",pathMatch: "full" ,component: CarComponent},
  {path: "carDetails/:carId", component: CarDetailComponent},
  {path: "cars", component: CarComponent},
  {path: "cars/brands/:brandId", component: CarComponent},
  {path: "cars/colors/:colorId", component: CarComponent},
  {path: "cars/carDetails/:carId", component: CarDetailComponent},
  {path: "cars/brands/:brandId/carDetails/:carId", component: CarDetailComponent},
  {path: "cars/colors/:colorId/carDetails/:carId", component: CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
