import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private Service: ApiService) { }
  
  datas: any;
  
  ngOnInit(): void {
  this.getData();
  }
  
  getData() {
  this.Service.getAllData().subscribe((res) => {
  this.datas = res;
  }); }}


