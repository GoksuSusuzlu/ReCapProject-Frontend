import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  dataLoaded = false;
  brands: Brand[] = [];
  currentBrand: Brand;
  defaultBrand: Brand;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.defaultBrand = this.currentBrand;
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  resetCurrentBrand(){
    this.currentBrand = this.defaultBrand;
  }

  getCurrentBrandClass(brand: Brand){
    if(brand == this.currentBrand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  setCurrentBrand(brand: Brand){
    this.currentBrand = brand;
  }

}
