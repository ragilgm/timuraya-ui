import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../core/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage!: string;
  isLoading: boolean = false;
  isValid : boolean = true;
  hide:boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }


  ngOnInit() {
    if(localStorage.getItem("id") != null){
      this.router.navigate(['/home']);
    }
    this.loginForm = this.fb.group({
      "username": ['', Validators.required],
      "password": ['', Validators.required],
    });
  }


  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (!this.loginForm.valid) {
      if (!username || !password) {
        this.isValid = false;
        this.errorMessage = "Username / Password yang Anda masukkan salah !";
      }
      return;
    }

    this.isLoading = true;

    const request = {
      "username":username,
      "password":password
    }

    this.loginService.logIn(request)
      .subscribe(
        response => {
          localStorage.setItem("role", JSON.stringify(response.biodata?.akses));
          localStorage.setItem("id", JSON.stringify(response.biodata?.id));
          localStorage.setItem("jabatan", JSON.stringify(response.biodata?.jabatan));
          this.isLoading = false;
          this.router.navigate(['/home']);
        },
        () => {
          this.errorMessage = "Login Gagal.!";
          this.isLoading = false;
          this.isValid = false;
        }
      );
  }

}
