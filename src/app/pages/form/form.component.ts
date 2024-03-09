import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private Service: ApiService) { }
  formData: any = {};
  formEditData: any = {};
  datas: any;
 
  ngOnInit(): void {
    this.getData();
  }
 
  submitForm() {
      this.Service.insertData(this.formData).subscribe((res) => {
        window.location.reload();
      });
  }
 
  getData() {
    this.Service.getAllData().subscribe((res) => {
      this.datas = res;
    });
  }
 
  deleteData(id: number) {
    console.log(id);
    this.Service.deleteData(id).subscribe((res) => {
      window.location.reload();
    });
  }
 
  editData(data: any) {
    this.formEditData = {
      id: data.id,
      fullname: data.fullname,
      email: data.email,
      job: data.job
    }
  }
 
  editForm() {
    this.Service.editData(this.formEditData.id, this.formEditData).subscribe((res) => {
      window.location.reload();
    });
  }
}