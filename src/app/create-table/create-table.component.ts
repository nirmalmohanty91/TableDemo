import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css'],
})
export class CreateTableComponent implements OnInit {

  constructor( private dataTransfer: DataTransferService) {
  }

  ngOnInit() {
  }

  columns = new Array(Number(this.dataTransfer.tableDetailsService.noOfColumns));
  dataTypes = [
    { value: '0', viewValue: 'Varchar' },
    { value: '1', viewValue: 'Number' },
    { value: '2', viewValue: 'Date' }
  ];

}
