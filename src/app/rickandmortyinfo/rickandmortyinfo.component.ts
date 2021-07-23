
import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';



@Component({
  selector: 'app-rickandmortyinfo',
  templateUrl: './rickandmortyinfo.component.html',
  styleUrls: ['./rickandmortyinfo.component.css'],
  
})
export class RickandmortyinfoComponent {
  title='episode';
  allrecords:any =[];
  constructor( private records: RecordsService){
    this.records.getRecordsService().subscribe(data=>{
      console.log(data);
      this.allrecords = data;
    });}}
