import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";

@Component({
  selector: 'app-letter-pengajuan',
  templateUrl: './letter-pengajuan.component.html',
  styleUrls: ['./letter-pengajuan.component.css']
})
export class LetterPengajuanComponent implements OnInit {

  paramId! :string | null

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRouter :ActivatedRoute,
    private pengajuanService: PengajuanService
  ) { }

  letterUrl! : string;

  ngOnInit(): void {
    if(localStorage.getItem("id") == null){
      this.router.navigate(['/login']);
    }
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    })
    this.letterUrl= "http://localhost:8080/pengajuan/letter/"+this.paramId;
  }

}
