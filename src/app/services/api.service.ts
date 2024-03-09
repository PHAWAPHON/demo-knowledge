import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getAllData() { //เรียกข้อมูลมาแสดง
    return this.http.get(`https://api-generator.retool.com/0z2kdb/data`);
  }
 
  insertData(data:any) {//สร้างข้อมูลใหม่
    return this.http.post(`https://api-generator.retool.com/0z2kdb/data`,data);
  }
  editData(id:number,data:any) {//อัปเดตข้อมูล
    return this.http.put(`https://api-generator.retool.com/0z2kdb/data/${id}`,data);
  }
  deleteData(id: number) {//ลบข้อมูล
    return this.http.delete(`https://api-generator.retool.com/0z2kdb/data/${id}`);
  }
}
