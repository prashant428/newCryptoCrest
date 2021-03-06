import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AuthGuard } from './survey/auth/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';

import {IndexModule} from './survey/index.module';
import {IndexComponent} from './survey/index.component';
import { PartialsModule } from './survey/partials/partials.module';
import { SurveyModule } from "./survey/survey/survey.module";
import { ListComponent } from './survey/survey/list.component';
import { AuthModule } from './survey/auth/auth.module';
import { SignInComponent } from './survey/auth/signin.component';
import { SignUpComponent } from './survey/auth/signup.component';
import { AddEditComponent } from './survey/survey/add_edit.component';
import { QuestionsComponent } from './survey/survey/questions/questions.component';
import { AnswersComponent } from './survey/survey/answers/answers.component';
import { ViewAnswersComponent } from './survey/survey/view-answers/view-answers.component';
import { UserprofileComponent } from './survey/auth/userprofile/userprofile.component';
import { EditprofileComponent } from './survey/auth/editprofile/editprofile.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    PartialsModule,
    SurveyModule,
    AuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "survey/list", component: ListComponent },
     { path: "survey/:mode", component: AddEditComponent, 
      canActivate: [AuthGuard]
    },
      { path: "survey/:mode/:id", component: AddEditComponent, 
     canActivate: [AuthGuard] 
    },
      { path: "users/signin", component: SignInComponent },
      { path: "users/signup", component: SignUpComponent },
      { path: "addQues/:id", component: QuestionsComponent,
       canActivate:[AuthGuard]
      },
      {path:"viewQues/:id", component:AnswersComponent, 
      //canActivate:[AuthGuard]
      },
      {path:"viewAns/:id", component: ViewAnswersComponent},
      {path:"users/userprofile", component:UserprofileComponent, canActivate: [AuthGuard]},
      {path:"users/editprofile/:username", component:EditprofileComponent},
     { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
