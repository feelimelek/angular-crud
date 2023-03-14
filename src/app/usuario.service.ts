import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Usuario} from "./usuario";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  public allUsers(): Observable<any> {
    return this.http.get(
      `api/usuarios`
    );
  }

  public saveUser(usuario: Usuario): Observable<any> {
    console.log(usuario);
    const usuarioJson = JSON.stringify(usuario);

    return this.http.request('POST', 'api/usuarios', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: usuarioJson
    });
  }

  public updateUser(usuario: Usuario): Observable<any> {
    const body = JSON.stringify(usuario);

    return this.http.request('PUT', 'http://localhost:8080/api', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
    })
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.request('DELETE', 'http://localhost:8080/api/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
