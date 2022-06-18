import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";

@Component({
  selector: 'app-form-pengajuan',
  templateUrl: './form-pengajuan.component.html',
  styleUrls: ['./form-pengajuan.component.css']
})
export class FormPengajuanComponent implements OnInit {

  createPengajuan!: FormGroup;
  errorMessage!: string;
  isValid : boolean = true;
  hide:boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pengajuanService: PengajuanService

  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("id") == null){
      this.router.navigate(['/login']);
    }
    this.createPengajuan = this.fb.group({
      "noPengajuan": ['', Validators.required],
      "nama": ['', Validators.required],
      "gender": ['', Validators.required],
      "kegiatan": ['', Validators.required],
      "keterangan": ['', Validators.required],
      "jumlah": ['', Validators.required],
      "divisi": ['', Validators.required],
      "tanggal": ['', Validators.required],
      "terbilang": ['', Validators.required],
      "kadiv": ['', Validators.required],
    });
  }

  backToHome(){
    this.router.navigate(['/home']);
  }

  submit(){
    console.log(this.createPengajuan.value)
    const {noPengajuan, nama, gender, kegiatan, keterangan, jumlah, divisi, tanggal, terbilang, kadiv} = this.createPengajuan.value;

    var request = {
      "noPengajuan":noPengajuan,
      "nama":nama,
      "gender":gender,
      "kegiatan":kegiatan,
      "keterangan":keterangan,
      "jumlah":jumlah,
      "divisi":divisi,
      "tanggal":tanggal,
      "terbilang":terbilang,
      "kadiv":kadiv,
    }
    this.pengajuanService.createPengajuan(request)
      .subscribe(
        response => {
          alert("Pengajuan berhasil")
          this.router.navigate(['/home']);
        },
        () => {
          alert("Gagal Membuat Pengajuan")
        }
      );

  }

}
