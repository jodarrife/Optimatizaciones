import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicesLogin/auth.service'
import { Router } from '@angular/router';
import { UserService } from '../servicesLogin/user.service';
import { DocenteService } from '../../services/docente.service';
import { JefeDepartamentoService } from '../../services/jefe-departamento.service';
import { JefeDepartamento } from 'src/app/models/jefe-departamento'
import { Docente } from 'src/app/models/docente';
import { isUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private user: UserService,
    private Auth: AuthService,
    private router: Router,
    private docenteService: DocenteService,
    private jefeService: JefeDepartamentoService
  ) { }

  docente: Docente;
  jefeDpto: JefeDepartamento;

  ngOnInit() {
    const inputs = document.querySelectorAll(".input");
    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }
    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }

  ValidarLogin() {
    var tipoCargo = (document.getElementById("tipoCargo") as HTMLInputElement).value;
    if (tipoCargo == "Docente") {
      this.ValidarLoginDocente();
     
    } else {
       if (tipoCargo == "Administrador") {
         this.ValidarLoginJefe();
         
       }else{
         alert("Elija un Rol")
       }
    }
  }

  ValidarLoginDocente() {
    var username = (document.getElementById("username") as HTMLInputElement).value;
    this.docenteService.getDocenteByUser(username).subscribe(docente => {
      this.docente = docente;
      if (!isUndefined(this.docente)) {
        this.ValidarDocente(this.docente.user_Name, this.docente.contrasena);
        this.docenteService.AddDocenteLS(this.docente);

      }
    });
  }
  
    ValidarLoginJefe() {
      var user = (document.getElementById("username") as HTMLInputElement).value;
      this.jefeService.getJefeDptoByUser(user).subscribe(jefeDpto => {
        this.jefeDpto = jefeDpto;
        if (!isUndefined(this.jefeDpto)) {
          this.ValidarJefe(this.jefeDpto.user_Name, this.jefeDpto.contrasena);
          this.jefeService.AddJefeDptoLS(this.jefeDpto);
  
        }
      });
    }
  
  ValidarDocente(usuario: string, Contraseña: string) {
    var user = (document.getElementById("username") as HTMLInputElement).value;
    var pass = (document.getElementById("password") as HTMLInputElement).value;
    console.log("usuario html", user)
    console.log("contraseña html", pass)
    console.log("usuario recibido", usuario)
    console.log("password recibido", Contraseña)
    if (usuario == user && Contraseña == pass) {
      this.docenteService.setDocenteLoggedIn();
      alert("Bienvenido Docente");
      this.router.navigate(['/HomePage']);
    } else {
      alert("Contraseña incorrecta")
    }
  }
  ValidarJefe(usuario: string, Contraseña: string) {
    var user = (document.getElementById("username") as HTMLInputElement).value;
    var pass = (document.getElementById("password") as HTMLInputElement).value;
    console.log("usuario html", user)
    console.log("contraseña html", pass)
    console.log("usuario recibido", usuario)
    console.log("password recibido", Contraseña)
    if (usuario == user && Contraseña == pass) {
      this.jefeService.setJefeDptoLoggedIn();
      alert("Bienvenido Administrador");
      this.router.navigate(['/HomePage']);
    } else {
      alert("Contraseña incorrecta")
    }
  }

 
}