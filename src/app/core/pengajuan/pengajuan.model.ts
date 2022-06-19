
export interface PengajuanDto {
  id: number;
  noPengajuan?: string;
  nama?: string;
  gender?: string;
  kegiatan?: string;
  keterangan?: string;
  jumlah?: number;
  divisi?: string;
  tanggal?: string;
  terbilang?: string;
  kadiv?: string;
  status?: string;
  tanggalDibuat?: Date;
  tanggalDiupdate?: Date;
  items?:ItemDto[]
  historyPengajuans?: HistoryPengajuanDto[];
}


export interface BiodataDto {
  id?: number;
  nama?: string;
  jabatan?: string;
  akses?: string;
  email?: string;
  nohp?: string;
  tanggalDibuat?: Date;
  tanggalDiupdate?: Date;
}

export interface HistoryPengajuanDto {
  biodata?: BiodataDto;
  status?: string;
  catatan?: string;
  nominal?: string;
  tanggalDibuat?:Date
  tanggalDiupdate?:Date
}


export interface PengajuanRequestDto {
  noPengajuan?: string;
  nama?:        string;
  gender?:      string;
  kegiatan?:    string;
  keterangan?:  string;
  items?: ItemRequestDto[];
  divisi?:      string;
  tanggal?:     string;
  terbilang?:   string;
  kadiv?:       string;
}

export interface ItemRequestDto{
  nama?: string;
  harga?: string;
  qty?:number
  total?:number
}


export interface ItemDto{
  nama?: string;
  harga?: string;
  qty?:number;
  total?:number
}
