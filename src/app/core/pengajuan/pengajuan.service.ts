import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
import {catchError, throwError} from "rxjs";
import {PengajuanDto, PengajuanRequestDto} from "./pengajuan.model";


@Injectable()
export class PengajuanService {
  pengajuanUrl!: string;

  constructor(private http: HttpClient) {
    this.init();
  }

  init() {
    this.pengajuanUrl = environment.baseUrl + environment.pengajuanUrl;
  }

  getPengajuan() {
    return this.http.get<PengajuanDto[]>(this.pengajuanUrl)
      .pipe(
        catchError(() => {
          return throwError("Load error");
        })
      );
  }

  getPengajuanById(id: string | null | undefined) {
    return this.http.get<PengajuanDto>(this.pengajuanUrl+"/"+id)
      .pipe(
        catchError(() => {
          return throwError("Load error");
        })
      );
  }

  createPengajuan(pengajuan:PengajuanRequestDto){
    return this.http.post<PengajuanDto>(this.pengajuanUrl,pengajuan)
      .pipe(
        catchError(() => {
          return throwError("Load error");
        })
      );
  }


  updatePengajuan(id: string | null, pengajuan: PengajuanRequestDto){
    return this.http.put<PengajuanDto>(this.pengajuanUrl+"/"+id,pengajuan)
      .pipe(
        catchError(() => {
          return throwError("Load error");
        })
      );
  }


  deletePengajuan(id:number){
    return this.http.delete<PengajuanDto>(this.pengajuanUrl+"/"+id)
      .pipe(
        catchError(() => {
          return throwError("Load error");
        })
      );
  }

}
