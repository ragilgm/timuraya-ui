import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import {LoginDto, LoginRequestDto} from "./login.model";
import {catchError, throwError} from "rxjs";


@Injectable()
export class LoginService {
  loginUrl!: string;

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.loginUrl = environment.baseUrl + environment.loginPath;
  }

  logIn(request : LoginRequestDto) {

    return this.http.post<LoginDto>(this.loginUrl, request)
      .pipe(
        catchError((errorResponse) => {
          // TODO: perbaiki error message ?
          switch (errorResponse.status) {
            case 400:
              return throwError("Username / Password yang Anda masukkan salah !");
            default:
              return throwError("Unknown error occured !");
          }
        })
      );
  }

  saveLocalStorage(responseLogin: LoginDto) {
    localStorage.setItem("data", JSON.stringify(responseLogin));
  }

}
