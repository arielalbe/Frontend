import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  desdeE: number = 0;
  hastaE: number = 0;
  imgE: string = '';

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  
  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreE, this.descripcionE, this.desdeE, this.hastaE, this.imgE);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto Añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}