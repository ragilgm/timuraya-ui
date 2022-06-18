import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";
import {PengajuanDto} from "../core/pengajuan/pengajuan.model";

@Component({
  selector: 'app-edit-pengajuan',
  templateUrl: './edit-pengajuan.component.html',
  styleUrls: ['./edit-pengajuan.component.css']
})
export class EditPengajuanComponent implements OnInit {

  paramId! :string | null
  editPengajuan!: FormGroup;
  datapengajuan!: PengajuanDto
  errorMessage!: string;
  isValid : boolean = true;
  hide:boolean = true;


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
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    })

    this.loadPengajuan(this.paramId)

    this.editPengajuan = this.fb.group({
      "kegiatan": ['', Validators.required],
      "keterangan": ['', Validators.required],
      "jumlah": ['', Validators.required],
      "divisi": ['', Validators.required]
    });

    console.log(this.datapengajuan)
  }

  backToHome(){
    this.router.navigate(['/home']);
  }


  loadPengajuan(id: string | null | undefined){
    this.pengajuanService.getPengajuanById(id)
      .subscribe(
        response => {
          console.log(response)
          this.datapengajuan=response
          this.editPengajuan.controls['kegiatan'].setValue(response.kegiatan)
          this.editPengajuan.controls['keterangan'].setValue(response.keterangan)
          this.editPengajuan.controls['jumlah'].setValue(response.jumlah)
          this.editPengajuan.controls['divisi'].setValue(response.divisi)
        },
        ()=> {
          alert("Server Error")
        }
      );
  }


  submit(){
    console.log(this.editPengajuan.value)
    const {kegiatan, keterangan, jumlah, divisi} = this.editPengajuan.value;

    var request = {
      "kegiatan":kegiatan,
      "keterangan":keterangan,
      "jumlah":jumlah,
      "divisi":divisi
    }

    this.pengajuanService.updatePengajuan(this.paramId,request)
      .subscribe(
        response => {
          alert("Pengajuan berhasil di edit")
          this.router.navigate(['/home']);
        },
        () => {
          alert("Pengajuan gagal di edit")
        }
      );

  }

}
