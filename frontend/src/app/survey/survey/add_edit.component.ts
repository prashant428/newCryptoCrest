import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/model/auth.service";
import { Survey } from "../../model/survey.model";
import { SurveyRepository } from "../../model/survey.repository";

@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html"
})

export class AddEditComponent {

    editing: boolean = false;
    item: Survey = new Survey();
    public message: string;

    constructor(private repository: SurveyRepository,
                private router: Router,
                activeRoute: ActivatedRoute,
                private auth: AuthService) 
                
    { 
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        if (this.editing) {
            this.item = repository.getItem(activeRoute.snapshot.params["id"]);
        } 
          
    }
//saves user entered data
    save(form: NgForm) {
        if(this.item.endDate<this.item.startDate) {
            this.message= "The End Date must be greater than Start Date!"


        }
        else{
            this.item.creator=this.auth.username;
            this.repository.saveSurvey(this.item);
            this.router.navigateByUrl("survey/list");

        }
       
    }
//deletes item
    private deleteItem(id: string){
        this.repository.deleteSurvey(id);
        this.router.navigateByUrl("survey/list");
    }
    
}