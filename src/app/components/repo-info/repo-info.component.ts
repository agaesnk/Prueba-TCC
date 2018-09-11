import { Component, OnInit } from '@angular/core';
import { RepoInfoService } from '../../services/repo-info.service';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})

export class RepoInfoComponent implements OnInit {

  data: any;
  servicesAmount = 0;
  componentsAmount = 0;

  constructor(
    private repoInfoService: RepoInfoService
  ) { }

  ngOnInit() {
    //Requiero toda la información del repositorio
    this.repoInfoService.getInfo()
    .then((data) => {
      this.data = data;
    })

    //Requiero cada una de las funciones contadoras
    .then(() =>{
      this.servicesCounter();
      this.componentsCounter();
    })
  }

  //Extraigo y contabilizo los elementos del tipo Servicio.
  servicesCounter(){
    this.data.tree.forEach(element => {
     if(element.path.includes('.service.ts')){
       this.servicesAmount++;
     };
    })
  }

  //Extraigo y contabilizo los elementos del tipo Componente.
  componentsCounter(){
    this.data.tree.forEach(element => {
     if(element.path.includes('.component.ts')){
       this.componentsAmount++;
     };
    })
  }
}
