import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";
import {PengajuanDto} from "../core/pengajuan/pengajuan.model";
import {LoginDto} from "../core/login/login.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPengajuan?:PengajuanDto[] = []
  isLoading: boolean = false;
  jabatan : string |undefined |null
  adminBedahara?:boolean=false;
  adminPengajuan?:boolean;
  adminKepalaDivisi?:boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pengajuanService: PengajuanService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("id") == null){
      this.router.navigate(['/login']);
    }
    this.canActive()
    this.getPengajuan()
  }

  toggle(){

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

  getPengajuan(){
    this.pengajuanService.getPengajuan()
      .subscribe(
        response => {
          this.listPengajuan=response
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login']);
  }


  goToFormPengajuan(){
    this.router.navigate(['/pengajuan']);
  }

  goToReportPengajuan(){
    this.router.navigate(['/report-pengajuan']);
  }

  goToDetailPengajuan(id: number) {
    this.router.navigate(['/pengajuan/'+id]);
  }

  goToEditHome(id:number){
    this.router.navigate(['/edit-pengajuan/'+id]);
  }

  delete(id:number){
    if (confirm("Press a button!")) {
      this.pengajuanService.deletePengajuan(id)
        .subscribe(
          response => {
            alert("Pengajuan berhasil dihapus")
            this.isLoading = false;
            this.router.navigate(['/home']);
          },
          () => {
            this.isLoading = false;
            alert("Pengajuan gagal dihapus")

          }
        );
    }
  }

  update(id:number){

  }


  approve(id:number){
    this.router.navigate(['/approval-pengajuan/'+id]);
  }



}
