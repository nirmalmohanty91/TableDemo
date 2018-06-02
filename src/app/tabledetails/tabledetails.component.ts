import { Component, OnInit } from '@angular/core';
import { TableDetails } from '../table_details';
import { CreateTableComponent } from '../create-table/create-table.component';
import { Router} from '@angular/router';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'app-tabledetails',
  templateUrl: './tabledetails.component.html',
  styleUrls: ['./tabledetails.component.css'],
  providers:[]
})
export class TabledetailsComponent implements OnInit {

  
 tableDetails=new TableDetails();
  constructor(private dataTransfer: DataTransferService,private router: Router ) { }
  ngOnInit() {
  }
onSubmit(){
   // alert("Thanks for submitting! Data :"+ JSON.stringify(this.tableDetails));
    this.dataTransfer.tableDetailsService=this.tableDetails;
    this.router.navigate(['createTable',this.dataTransfer.tableDetailsService],{skipLocationChange: true});
   // this.router.navigate(['createTable'],{ queryParams:  this.dataTransfer.tableDetailsService});
}

}
