import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";
import {PengajuanDto} from "../core/pengajuan/pengajuan.model";

@Component({
  selector: 'app-detail-pengajuan',
  templateUrl: './detail-pengajuan.component.html',
  styleUrls: ['./detail-pengajuan.component.css']
})
export class DetailPengajuanComponent implements OnInit {


  detailPengajuan!:PengajuanDto;
  isPengajuan! : boolean

   paramId! :string | null

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRouter :ActivatedRoute,
    private pengajuanService: PengajuanService
  ) { }

  ngOnInit(): void {

    if(localStorage.getItem("id") == null){
      this.router.navigate(['/login']);
    }
    if(localStorage.getItem("role")===JSON.stringify("PENGAJUAN")){
      this.isPengajuan = true;
    }

    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    })
    this.loadPengajuan(this.paramId)

  }

  backToHome(){
    this.router.navigate(['/home']);
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


  getLetterFile(id: number) {
    this.router.navigate(['/letter-pengajuan/'+id]);
  }
}
