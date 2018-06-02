import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HotelariaService {

  constructor(private http: HttpClient) { }

  getHotelariaById(id: string){
    return this.http.get('http://localhost:8080/hotelarias/id');
  }

  getHotelarias(){
    return this.http.get('http://localhost:8080/hotelarias/');
  }

  upHotelaria(){
    return this.http.get('http://localhost:8080/hotelarias/');
  }

  rmHotelaria(){
    return this.http.get('http://localhost:8080/hotelarias/');
  }

  postHotelariaData(){
    return this.http.post('http://localhost:8080/hotelarias/', {hi: 'Cadastro com sucesso'});
  }


}
