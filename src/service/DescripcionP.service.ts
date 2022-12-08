import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const URL1='assets/data/pd1.json';
@Injectable({
    providedIn: 'root'
})

export class DescripcionPService{
    url="http://localhost/php/";

    constructor(private http:HttpClient){}

    getAll(){

        return this.http.get(`${this.url}getall.php`);

    }

    agregar(Producto:string){

        return this.http.post(`${this.url}post.php`,JSON.stringify(Producto));

    }
}