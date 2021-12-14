import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  
})
export class IndexComponent {
  username: string;
//stores username data from index
  constructor(public auth: AuthService, private router: Router){
    this.username=auth.username;
   }

   surveyList(){
     this.router.navigateByUrl("survey/list");
   }
}