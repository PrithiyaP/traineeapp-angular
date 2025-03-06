import { Component,OnInit} from '@angular/core';
import { SharesrviceService } from '../shareservice/sharesrvice.service';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
user:any[]=[];

constructor(private sharedata:SharesrviceService,private matDialog:MatDialog){}

ngOnInit(): void {
  this.getdatafromsidenav();
}



getdatafromsidenav(){
    this.sharedata.userdata.subscribe(data=>{
    console.log(data);
  this.user=data.project
console.log(this.user);    
})
}
opendialog(element:any[]){
// this.matDialog.open(UpdateComponent, {
//       width: '670px',
//       height: '200px',
//       data: element,
//     });


 this.matDialog.open(UpdateComponent, {
    width: '670px',
    height: '200px',
    data: element,
  });
    console.log(element);
  }


displayedColumns:string[]=['Project ID','Project Name','Role','Status','skills','Action']
}

