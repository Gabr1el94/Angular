import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

class Hotelaria{
	constructor(
		public nomeHot:string='',
		public cnpj:string='',
		public email:string ='',
		public fone:string='',
		public city: string ='',
	){}
}


@Component({
  selector: 'app-hotelaria',
  templateUrl: './hotelaria.component.html',
  styleUrls: ['./hotelaria.component.css']
})
export class HotelariaComponent implements OnInit {

  hotelarias: Hotelaria[] = [];
  
  selectFile: File=null;
  
  regModel: Hotelaria;
  
  showNew: Boolean = false;
 
  submitType: string='Salvar';

  selectedRow: number;

  citys: string[] = ['Recife', 'Caruaru', 'Petrolina'];


  onFileUpload(event){
      this.selectFile=<File>event.target.files[5];
  }

  constructor(private router:Router,private http:HttpClient) {
        this.hotelarias.push(new Hotelaria('Johan Peter', '99.999.999/9999-99', 'johan@gmail.com', '(99)9999-9999', 'Recife'));
  }

  ngOnInit() {
  }

  onNew(){
    this.regModel = new Hotelaria();
    this.submitType = 'Salvar';
    this.showNew = true;
  }
/*
    const fd = new FormData();
    fd.append('image',this.selectFile,this.selectFile.name);
    this.http.post('url',fd).subscribe(res=>{
      console.log(event);
    });

*/
  onSave(){
      if (this.submitType === 'Salvar') {         
        this.hotelarias.push(this.regModel);
      }else {
        this.hotelarias[this.selectedRow].nomeHot = this.regModel.nomeHot;
        this.hotelarias[this.selectedRow].cnpj = this.regModel.cnpj;
        this.hotelarias[this.selectedRow].email = this.regModel.email;
        this.hotelarias[this.selectedRow].fone = this.regModel.fone;
        this.hotelarias[this.selectedRow].city = this.regModel.city;
      }
      this.showNew = false;
  }

   onEdit(index: number) {
    this.selectedRow = index;
    this.regModel = new Hotelaria();
    this.regModel = Object.assign({}, this.hotelarias[this.selectedRow]);
    this.submitType = 'Atualizar';
    this.showNew = true;
  }

  onDelete(index: number){
    this.hotelarias.splice(index, 1);
  }

  onCancel(){
    this.showNew = false;
  }

  onChangeCity(city: string) {
    this.regModel.city = city;
  }

}
