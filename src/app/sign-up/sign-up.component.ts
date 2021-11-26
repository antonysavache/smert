import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray } from "@angular/forms";
import { CustomValidationService } from "../services/custom-validation.service";

let a = document.querySelector('.row')
let mySelect = document.querySelector('#inputState')


@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

  userForm = this.fb.group(
    {
      username: [
        "",
        [Validators.required, Validators.minLength(3)],
        this.customValidator.validateUsernameNotTaken.bind(this.customValidator)
      ],
      secondName: [
        "",
        [Validators.required, Validators.minLength(3)],
        this.customValidator.validateUsernameNotTaken.bind(this.customValidator)
      ],

      email: [
        "",
        [Validators.required, Validators.minLength(3)],
        this.customValidator.validateUsernameNotTaken.bind(this.customValidator)
      ],

      framework: [""],
      frameVersionOptions: [""],
      


      // daysAvailable: this.fb.array([this.fb.control("")])
    },
    {
      validator: this.customValidator.passwordMatchValidator(
        "password",
        "confirmPassword"
      )
    }
  );

  get frame(){
    return this.userForm.get("framework") as FormArray;
  }


  onChange() {
    if (this.framework === 'Angular'){
      console.log('ch')
    }
    return console.log('angular')
  }


  get daysAvailable() {
    return this.userForm.get("daysAvailable") as FormArray;
  }

  get username() {
    return this.userForm.get("username");
  }

  get framework() {
    return this.userForm.get("framework");
  }

  get password() {
    return this.userForm.get("password");
  }

  frameOptions: string[] = ["Angular", "React", "Vue"];

  angular: string[] = ["1.1.1", "1.2.1", "1.3.3"];
  react: string[] = ["1.1.1", "1.2.1", "1.3.3"];
  vue: string[] = ["1.1.1", "1.2.1", "1.3.3"];

  // frameVersionOptions: string[] = this.onChange();


  
  frameFunc(){
    if(this.frame.value === "React"){
      
    }
  }


  ngOnInit() {}


  clear() {
    this.userForm.reset();
    //this.username.setValue("");
  }

//   onChange() {
//     console.log('deviceValue');
//     a.insertAdjacentHTML('beforeend', "p")
// }

  onSubmit() {
    console.log(this.userForm.value);
    console.log(this.frame.value);
  }
}
