import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicesLogin/auth.service'
import { Router } from '@angular/router';
import { User } from 'oidc-client';
import { UserService } from '../servicesLogin/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private user:UserService,
    private Auth:AuthService, 
    private router: Router
    ) { }
  
  ngOnInit() {
    const inputs = document.querySelectorAll(".input");
    function addcl(){
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }
    
    function remcl(){
      let parent = this.parentNode.parentNode;
      if(this.value == ""){
        parent.classList.remove("focus");
      }
    }
    inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }


  /*LOGIN*/
    loginUser(e){
      e.preventDefault();
      console.log(e);
      var username = e.target.elements[0].value;
      var password = e.target.elements[1].value;
      
      if(username == 'admin' && password == 'admin')
      {
        this.user.serUserLoggedId();
        this.router.navigate(['/HomePage']);
      }
    }
}
