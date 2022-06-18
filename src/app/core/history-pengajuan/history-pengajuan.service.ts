import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {catchError, throwError} from "rxjs";
import {HistoryPengajuanDto, HistoryPengajuanRequestDto} from "./history-pengajuan.model";


@Injectable()
export class HistoryPengajuanService {
  historyPengajuanPath!: string;

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.historyPengajuanPath = environment.baseUrl + environment.historyPengajuanPath;
  }

  createHistoryPengajuan(request : HistoryPengajuanRequestDto) {

    return this.http.post<HistoryPengajuanDto>(this.historyPengajuanPath, request)
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


}
