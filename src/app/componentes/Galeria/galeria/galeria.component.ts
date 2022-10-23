import { Component, OnInit } from '@angular/core';
import { DescripcionPService } from 'src/service/DescripcionP.service';
import{Route}from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  ProductList:any[]=[];
  constructor(private ProductosSvc:DescripcionPService) { 
    this.ProductosSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    });
  }

  ngOnInit(): void {
  }

}
