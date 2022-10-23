import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const URL1='assets/data/pd1.json';
@Injectable({
    providedIn: 'root'
})

export class DescripcionPService{
    constructor(private http: HttpClient){}

    getAll(){
        return this.http.get(URL1);
    }
}