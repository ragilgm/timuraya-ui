import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PengajuanService} from "../core/pengajuan/pengajuan.service";
import { environment } from "src/environments/environment";

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
  baseUrl! : string
  letterUrl! : string;

  ngOnInit(): void {
    this.baseUrl=environment.baseUrl
    if(localStorage.getItem("id") == null){
      this.router.navigate(['/login']);
    }
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    })
    this.letterUrl= "";
  }

}
