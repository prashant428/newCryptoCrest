import { Answer } from "./answer.model";
export class Completed {

    //constructor storing respondent model
    constructor(
        public respondent?: string,
        public answers?: Array<Answer>,
      
       
    
    ){}

}