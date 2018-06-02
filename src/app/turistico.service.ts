import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TuristicoService {

  constructor(private http: HttpClient) { }

  getTuristicoById(id: string){
    return this.http.get('http://localhost:8080/turisticos/id');
  }

  getTuristicos(){
    return this.http.get('http://localhost:8080/turisticos/');
  }

  upTuristico(){
    return this.http.get('http://localhost:8080/turisticos/');
  }

  rmTuristico(){
    return this.http.get('http://localhost:8080/turisticos/');
  }

  postTuristicoData(){
    return this.http.post('http://localhost:8080/turisticos/', {hi: 'Cadastro com sucesso'});
  }

}
