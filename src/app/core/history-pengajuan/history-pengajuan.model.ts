import {BiodataDto, PengajuanDto} from "../pengajuan/pengajuan.model";

export interface HistoryPengajuanRequestDto {
  biodataId: string;
  pengajuanId: string;
  status: string;
  catatan: string;
}

export interface HistoryPengajuanDto {
  pengajuan: PengajuanDto;
  biodata: BiodataDto;
  status: string;
  catatan: string;
  nominal?: any;
}
