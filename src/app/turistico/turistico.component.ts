import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

class Turistico{

	constructor(
		public nomeTur:string='',
    public city: string = '',
	){}

}

@Component({
  selector: 'app-turistico',
  templateUrl: './turistico.component.html',
  styleUrls: ['./turistico.component.css']
})
export class TuristicoComponent implements OnInit {

  turisticos: Turistico[] = [];

  regModel: Turistico;

  showNew: Boolean = false;

  submitType: string='Salvar';
 
  selectFile: File=null;

  selectedRow: number;

  citys: string[] = ['Recife', 'Caruaru', 'Petrolina'];


  onFileUpload(event){
      this.selectFile=<File>event.target.files[2];
  }

  constructor(private router:Router,private http:HttpClient) {
      this.turisticos.push(new Turistico('Johan Peter', 'Recife'));
   }

  ngOnInit() {
  }

  onNew(){
    this.regModel = new Turistico();
    this.submitType = 'Salvar';
    this.showNew = true;
  }

  onSave(){
     if (this.submitType === 'Salvar') {
     
      this.turisticos.push(this.regModel);
    }else{
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
    this.turisticos.splice(index, 1);
  }

  onCancel(){
    this.showNew = false;
  }

  onChangeCity(city: string) {
    this.regModel.city = city;
  }

}
