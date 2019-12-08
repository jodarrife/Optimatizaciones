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
  jefeDpto: JefeDepartamento[];

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


  /*LOGIN
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username == 'admin' && password == 'admin') {
      this.user.serUserLoggedId();
      this.router.navigate(['/HomePage']);
    }
  }
*/
  ValidarLogin() {
    var tipoCargo = (document.getElementById("tipoCargo") as HTMLInputElement).value;
    if (tipoCargo == "Docente") {
      this.ValidarLoginDocente();
    } else {
      alert("Elija un Rol");
      /* if (tipoCargo == "Administrador") {
         //this.ValidarLoginJefe();
       }else{
         alert("Elija un Rol")
       }*/
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
  /*
    ValidarLoginJefe() {
      var user = (document.getElementById("username") as HTMLInputElement).value;
      this.jefeService.get(user).subscribe(jefe => {
        this.jefeDpto = jefe;
        if (!isUndefined(this.docente)) {
          this.ValidarJefe(this.jefe.usuario, this.jefe.password);
          this.jefeService.AddJefeDepartamentoLS(this.jefe);
  
        }
      });
    }
  */
  ValidarDocente(usuario: string, Contraseña: string) {
    var user = (document.getElementById("username") as HTMLInputElement).value;
    var pass = (document.getElementById("password") as HTMLInputElement).value;
    console.log("usuario html", user)
    console.log("contraseña html", pass)
    console.log("usuario recibido", usuario)
    console.log("password recibido", Contraseña)
    if (usuario == user && Contraseña == pass) {
      this.docenteService.setDocenteLoggedIn();
      this.router.navigate(['/HomePage']);
    } else {
      alert("Contraseña incorrecta")
    }
  }
  ValidarJefe(usuario: string, Contraseña: string) {
    var user = (document.getElementById("username") as HTMLInputElement).value;
    var pass = (document.getElementById("password") as HTMLInputElement).value;

    if (usuario == user && Contraseña == pass) {
      this.jefeService.setJefeLoggedId();
      this.router.navigate(['/HomePage']);
    } else {
      alert("Contraseña incorrecta")
    }
  }

}