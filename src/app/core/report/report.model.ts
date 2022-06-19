export interface ReportModel {
  reportPengajuan:Map<string,ReportPengajuanDto[]>
  totalPengeluaran:number
}


export interface ReportPengajuanDto{
  id: number;
  noPengajuan: string;
  kegiatan: string;
  keterangan: string;
  divisi: string;
  jumlah: number;
  tanggalDibuat: Date;
}
