import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { AuthService } from "src/app/model/auth.service";
import { Survey } from "../../model/survey.model";
import { SurveyRepository } from "../../model/survey.repository";

@Component({
    selector: "list-survey",
    templateUrl: "list.component.html"
})

export class ListComponent {
    username:string;
    todayDate:Date=new Date();

    constructor(private repository: SurveyRepository,
        private router: Router,
        public auth:AuthService) 
    { 
        this.username=auth.username;
       
    }
//gets list of survey
    get surveyList(): Survey[] {
        return this.repository.getSurvey();        
    }
//deletes survey
    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("survey/delete/"+id);
        }
    }
    
}


