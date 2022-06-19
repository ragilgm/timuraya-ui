import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  orderForm!: FormGroup;
  items!: FormArray;


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

    this.orderForm = new FormGroup({
      items: new FormArray([])
    });

    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    })

    this.editPengajuan = this.fb.group({
      "kegiatan": ['', Validators.required],
      "keterangan": ['', Validators.required],
      "divisi": ['', Validators.required]
    });

    this.loadPengajuan(this.paramId)

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
          this.editPengajuan.controls['divisi'].setValue(response.divisi)
          console.log("rest"+response)
            response.items?.forEach(data=> {
              this.items = this.orderForm.get('items') as FormArray;
              this.items.push(this.fb.group({
                nama: data.nama,
                harga: data.harga,
              }))
            })

          console.log("wkwkwkw"+this.orderForm)

        },
        ()=> {
          alert("Server Error")
        }
      );
  }


  submit(){
    console.log(this.editPengajuan.value)
    const {kegiatan, keterangan, divisi} = this.editPengajuan.value;

    var request = {
      "kegiatan":kegiatan,
      "keterangan":keterangan,
      "divisi":divisi,
      "items": this.items.value
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

  createItem(): FormGroup {
    return this.fb.group({
      nama: '',
      harga: '',
    });
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
