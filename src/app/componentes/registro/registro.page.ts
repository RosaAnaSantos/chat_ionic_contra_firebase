import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services_registro/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public  email : string;
  public  name : string;
  public password : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }

  registrar(){
    this.auth.registro(this.email, this.password,this.name).then( auth => {
      this.router.navigate(['/home'])
      console.log(auth)
      this.email="";
      this.password="";
      this.name="";
    }).catch(err => console.log(err))
    
  }

}

