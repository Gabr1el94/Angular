import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

class Turistico{
  
  _id:number;
  nome:string;
  cidade:string;
  foto:Blob;

  constructor(
    public id:number=0,
    public nomeTur:string='',
    public city: string = '',
    public file: Blob = null,
  ){}


}

@Component({
  selector: 'app-turistico',
  templateUrl: './turistico.component.html',
  styleUrls: ['./turistico.component.css']
})
export class TuristicoComponent implements OnInit {

  private apiUrl='http://localhost:8080/hotelarias';
  data:any={};

  turisticos: Turistico[] = [];

  regModel: Turistico;

  showNew: Boolean = false;

  submitType: string='Salvar';
 
  selectFile: File=null;

  selectedRow: number;

  citys: string[] = ['Recife', 'Caruaru', 'Petrolina'];


 onChange(event) {
      this.selectFile = event.target.files; 
      console.log(this.selectFile); 
  }


   constructor(private http:Http) {
      this.turisticos.push(new Turistico(0,'Johan Peter', 'Recife'));
     console.log("Bem vindo");
     this.getDado();
     this.getTuristicos();
   }

  ngOnInit() {
  }

  getDado(){
      return this.http.get(this.apiUrl)
      .map((res: Response)=>res.json)
  }

  getTuristicos(){
    this.getDado().subscribe(data=>{
       console.log(data);
       this.data = data
    })
  }


  onNew(){
    this.regModel = new Turistico();
    this.submitType = 'Salvar';
    this.showNew = true;
  }

  onSave(){
     if (this.submitType === 'Salvar') {
      window.alert("Cadastrado com sucesso");
      this.turisticos.push(this.regModel);
    }else{
      window.alert("Atualizado com sucesso");
      this.turisticos[this.selectedRow].nomeTur = this.regModel.nomeTur;
      this.turisticos[this.selectedRow].city = this.regModel.city;
    }
    this.showNew = false;
  }

  onEdit(index: number){
    this.selectedRow = index;
    this.regModel = new Turistico();
    this.regModel = Object.assign({}, this.turisticos[this.selectedRow]);
    this.submitType = 'Atualizar';
    this.showNew = true;
  }

  onDelete(index: number){
    window.alert("Deletado com sucesso");
    this.turisticos.splice(index, 1);
  }

  onCancel(){
    this.showNew = false;
  }

  onChangeCity(city: string) {
    this.regModel.city = city;
  }

}
