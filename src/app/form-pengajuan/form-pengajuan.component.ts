import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";
import {ItemRequestDto} from "../core/pengajuan/pengajuan.model";

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
  orderForm!: FormGroup;
  items!: FormArray;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pengajuanService: PengajuanService

  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("id") == null){
      this.router.navigate(['/login']);
    }
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
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
    const {kegiatan, keterangan, divisi} = this.createPengajuan.value;
    this.items = this.orderForm.get('items') as FormArray;

    if(this.items.length==0){
      alert("Item harus ditambahkan")
      return
    }

    var request = {
      "kegiatan":kegiatan,
      "keterangan":keterangan,
      "divisi":divisi,
      "items": this.items.value
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

  createItem(): FormGroup {
    return this.fb.group({
      nama: '',
      harga: '',
    });
  }

  test(){
    console.log(this.orderForm.value)
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem())
  }

  removeItem(index: number): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.removeAt(index)
  }


  get lessons() {
    return this.orderForm?.get('items') as FormArray;
  }


}
