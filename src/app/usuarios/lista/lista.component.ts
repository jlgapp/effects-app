import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios : Usuario[] = [];

  constructor(public usuarioServices:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioServices.getUsers()
    .subscribe( data => this.usuarios = data
    );
  }

}
