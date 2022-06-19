import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./core/login/login.service";
import {PengajuanService} from "./core/pengajuan/pengajuan.service";
import { FormPengajuanComponent } from './form-pengajuan/form-pengajuan.component';
import { DetailPengajuanComponent } from './detail-pengajuan/detail-pengajuan.component';
import { ReportPengajuanComponent } from './report-pengajuan/report-pengajuan.component';
import { ApprovalPengajuanComponent } from './approval-pengajuan/approval-pengajuan.component';
import {HistoryPengajuanService} from "./core/history-pengajuan/history-pengajuan.service";
import { EditPengajuanComponent } from './edit-pengajuan/edit-pengajuan.component';
import { LetterPengajuanComponent } from './letter-pengajuan/letter-pengajuan.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {NgxExtendedPdfViewerServerModule} from "ngx-extended-pdf-viewer";
import { ReportDetailPengajuanComponent } from './report-detail-pengajuan/report-detail-pengajuan.component';
import {ReportService} from "./core/report/report.service";

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AppComponent,
    FormPengajuanComponent,
    DetailPengajuanComponent,
    ReportPengajuanComponent,
    ApprovalPengajuanComponent,
    EditPengajuanComponent,
    LetterPengajuanComponent,
    ReportDetailPengajuanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule,
    NgxExtendedPdfViewerServerModule

  ],
  providers: [LoginService,PengajuanService,HistoryPengajuanService,ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
