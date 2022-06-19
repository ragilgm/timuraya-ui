import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {ReportService} from "../core/report/report.service";
import {ReportModel, ReportPengajuanDto} from "../core/report/report.model";

@Component({
  selector: 'app-report-detail-pengajuan',
  templateUrl: './report-detail-pengajuan.component.html',
  styleUrls: ['./report-detail-pengajuan.component.css']
})
export class ReportDetailPengajuanComponent implements OnInit {

  reports! : ReportModel
  total : number = 0
  adminBedahara?:boolean=false;
  adminPengajuan?:boolean;
  adminKepalaDivisi?:boolean;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private reportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.getReports()
    this.canActive()
  }

  getReports(){
    this.reportService.getReportPengajuan().
      subscribe(data=> {
      console.log(data)
         this.reports=data;
    })
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login']);
  }


  goToFormPengajuan(){
    this.router.navigate(['/pengajuan']);
  }

  goToReportPengajuan(){
    this.router.navigate(['/report-detail']);
  }

  goToDetailPengajuan(id: number) {
    this.router.navigate(['/pengajuan/'+id]);
  }


  goToHome() {
    this.router.navigate(['/home']);
  }

  canActive(){
    let jabatan = localStorage.getItem("jabatan")
    if(jabatan===JSON.stringify("ADMIN_BENDAHARA")){
      this.adminBedahara=true;
    }
    if(jabatan===JSON.stringify("ADMIN_PENGAJUAN")){
      this.adminPengajuan=true;
    }

    if(jabatan===JSON.stringify("ADMIN_KEPALA_DIVISI")){
      this.adminKepalaDivisi=true;
    }
  }


}
