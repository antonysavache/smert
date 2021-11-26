import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray } from "@angular/forms";
import { CustomValidationService } from "../services/custom-validation.service";
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// let dateInput = document.querySelector('#datetime-picker');

function onClick(event){
  return flatpickr(event.target, options);
}

// dateInput.addEventListener('click', chooseADate)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
};

// 



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
        [Validators.required, Validators.minLength(3), Validators.email],
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
    console.log(this.framework.value == 'Angular')
    if(this.framework.value == 'Angular'){
      return this.frameVersionOptions = ["1.1.1", "1.2.1", "1.3.3"];
    } else if (this.framework.value == 'React'){
      return this.frameVersionOptions = ["2.1.2", "3.2.4", "4.3.1"];
    } else if (this.framework.value == 'Vue'){
    return this.frameVersionOptions = ["3.3.1", "5.2.1", "5.1.3"]}
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


  choose: string[] = null;

  frameOptions: string[] = ["Angular", "React", "Vue"];

  
  // frameVersionOptions: string[] = ["1.1.1", "1.2.1", "1.3.3"];
  react: string[] = ["1.1.1", "1.2.1", "1.3.3"];
  vue: string[] = ["1.1.1", "1.2.1", "1.3.3"];

  frameVersionOptions: string[] = this.onChange();
  
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




