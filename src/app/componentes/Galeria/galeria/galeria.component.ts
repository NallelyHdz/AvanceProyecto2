import { Component, OnInit } from '@angular/core';
import { DescripcionPService } from 'src/service/DescripcionP.service';
import { FormGroup,FormControl} from '@angular/forms';
import{Route}from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  productos=null;
  ProductList:any[]=[];
  productForm= new FormGroup({

    Nombre:new FormControl(''),

    Cantidad:new FormControl(''),

    Precio:new FormControl('')

  });
  constructor(private ProductosSvc:DescripcionPService) { 
   //this.ProductosSvc.getAll().subscribe((result:any)=>{
      //this.ProductList=result;
      //console.log(result)
    }
  

  ngOnInit(): void {
      this.MostrarTodos();
  }

  MostrarTodos(){

    this.ProductosSvc.getAll().subscribe((result:any)  =>

    this.ProductList=result);

    console.log(this.ProductList+"hola");

  }
  Agregar():void{

    this.ProductosSvc.agregar(this.productForm.value).subscribe(()=>{

      this.MostrarTodos();

      this.productForm.reset();

    })

  }


}
