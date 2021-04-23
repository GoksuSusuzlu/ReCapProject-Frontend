import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  dataLoaded = false;
  colors: Color[] = [];
  currentColor: Color;
  defaultColor: Color;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.defaultColor = this.currentColor;
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data;
      this.dataLoaded = true;
    })
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  resetCurrentColor(){
    this.currentColor = this.defaultColor;
  }

  getCurrentColorClass(color: Color){
    if(color == this.currentColor){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  setCurrentColor(color: Color){
    this.currentColor = color;
  }

}
