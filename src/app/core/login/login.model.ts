export interface LoginRequestDto {
  username?:string
  password?:string
}

export interface LoginDto {
  id?: number;
  username?: string;
  password?: string;
  tanggalDibuat?: Date;
  tanggalDiupdate?: Date;
  biodata?: BiodataDto;
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
