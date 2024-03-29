import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";
import {PengajuanDto} from "../core/pengajuan/pengajuan.model";
import {HistoryPengajuanService} from "../core/history-pengajuan/history-pengajuan.service";

@Component({
  selector: 'app-approval-pengajuan',
  templateUrl: './approval-pengajuan.component.html',
  styleUrls: ['./approval-pengajuan.component.css']
})
export class ApprovalPengajuanComponent implements OnInit {

  paramId! :string | null
  detailPengajuan!:PengajuanDto;
  historyPengajuan!: FormGroup;
  adminKepalaDivisi?:boolean;
  status!:string

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRouter :ActivatedRoute,
    private pengajuanService: PengajuanService,
    private historyPengajuanService: HistoryPengajuanService,
  ) { }

  ngOnInit(): void {
    this.canActive()
    this.historyPengajuan = this.fb.group({
      "catatan": ['', Validators.required],
      "status": ['', Validators.required],
    });

    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    })
    this.loadPengajuan(this.paramId)
    console.log(this.adminKepalaDivisi)
  }

  canActive(){
    let jabatan = localStorage.getItem("jabatan")
    if(jabatan===JSON.stringify("KEPALA_KEUANGAN")){
      this.adminKepalaDivisi=true;
    }else {
      this.adminKepalaDivisi=false;
    }
  }

  loadPengajuan(id: string | null | undefined){
    this.pengajuanService.getPengajuanById(id)
      .subscribe(
        response => {
          console.log(response)
          this.detailPengajuan=response
        },
        ()=> {
          alert("Server Error")
        }
      );
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

  submit(){

    if(this.adminKepalaDivisi){
      if (confirm('Dengan mentekan tombol approve anda telah mensetujui proses pengajuan ini dengan bukti digital signature pada invoce')) {
        // Save it!
      } else {
        return;
      }
    }

    const {
      catatan,
    } = this.historyPengajuan.value;

    console.log(this.historyPengajuan.value)

    var request = {
      "biodataId":""+localStorage.getItem("id"),
      "pengajuanId":""+this.paramId,
      "status":this.status,
      "catatan":catatan,
    }
    console.log(request)
    this.historyPengajuanService.createHistoryPengajuan(request)
      .subscribe(
        response => {
          alert("Approval Pengajuan berhasil dikirim")
          this.router.navigate(['/home']);
        },
        () => {
          alert("Approval Pengajuan Gagal dikirim")
        }
      );

  }

  setStatus(status: string) {
    this.status=status
  }
}
