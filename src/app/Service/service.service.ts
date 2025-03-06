import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

    getConnection(){
        return this._http.get<any[]>('./assets/userdata.json');
    }
}
