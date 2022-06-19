import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import {catchError, throwError} from "rxjs";
import {ReportModel} from "./report.model";


@Injectable()
export class ReportService {
  pengajuanUrl!: string;

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.pengajuanUrl = environment.baseUrl + environment.reportUrl;
  }

  getReportPengajuan() {
    return this.http.get<ReportModel>(this.pengajuanUrl)
      .pipe(
        catchError(() => {
          return throwError("Load error");
        })
      );
  }


}
