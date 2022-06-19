import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FormPengajuanComponent} from "./form-pengajuan/form-pengajuan.component";
import {DetailPengajuanComponent} from "./detail-pengajuan/detail-pengajuan.component";
import {ReportPengajuanComponent} from "./report-pengajuan/report-pengajuan.component";
import {ApprovalPengajuanComponent} from "./approval-pengajuan/approval-pengajuan.component";
import {EditPengajuanComponent} from "./edit-pengajuan/edit-pengajuan.component";
import {LetterPengajuanComponent} from "./letter-pengajuan/letter-pengajuan.component";
import {ReportDetailPengajuanComponent} from "./report-detail-pengajuan/report-detail-pengajuan.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pengajuan',
    component: FormPengajuanComponent
  },
  {
    path: 'edit-pengajuan/:id',
    component: EditPengajuanComponent
  },
  {
    path: 'pengajuan/:id',
    component: DetailPengajuanComponent
  },
  {
    path: 'report-pengajuan',
    component: ReportPengajuanComponent
  },
  {
    path: 'approval-pengajuan/:id',
    component: ApprovalPengajuanComponent
  },
  {
    path: 'letter-pengajuan/:id',
    component: LetterPengajuanComponent
  },
  {
    path: 'report-detail',
    component: ReportDetailPengajuanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
