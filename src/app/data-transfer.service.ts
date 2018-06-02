import { Injectable } from '@angular/core';
import { TableDetails } from './table_details';

@Injectable()
export class DataTransferService {
 tableDetailsService=new TableDetails();

  constructor() { 
  }

}
