import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Usuario} from "./usuario";
import {UsuarioService} from "./usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usuarios: Array<Usuario> = [];
  idUltimoUsuario: number = 0;
  nomeUsuario: string ='';
  idadeUsuario: string ='';
  constructor(private modalService: NgbModal,
              private usuarioService: UsuarioService) {
  }
  
  salvar():void{
    const usuario:Usuario = {
      idUsuario: (this.idUltimoUsuario + 1),
      idadeUsuario: +this.idadeUsuario,
      nomeUsuario: this.nomeUsuario
    }
    this.usuarioService.saveUser(usuario).subscribe
    (
      resposta => {
        alert("Usuario Salvo!")
        console.log(resposta)
      }, errors => {
        console.log('deu ruim: '+ errors);
      }
    );
  }

  atualizar():void{
    const usuario: Usuario = {
      idUsuario: 0,
      idadeUsuario: +this.idadeUsuario,
      nomeUsuario: this.nomeUsuario
    }
    this.usuarioService.updateUser(usuario).subscribe
    (
      resposta => {
        alert("Usuario Salvo!")
      }, errors => {
        console.log('deu ruim: '+ errors);
      }
    );
  }

  limpar():void{
    this.nomeUsuario ='';
    this.idadeUsuario ='';
  }

  ngOnInit(): void {
    this.usuarioService.allUsers().subscribe
    (
      data => {
        console.log(data);
        this.idUltimoUsuario = data[data.length - 1].id;
        console.log("Id Último Usuário: " + this.idUltimoUsuario);
      }, errors => {
        console.log('deu ruim: '+ errors);
      }
    );
  }
}
