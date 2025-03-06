import { Component ,OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import data from '../../assets/userdata.json'
import { SharesrviceService } from '../shareservice/sharesrvice.service';

 


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

users:any[]=data

constructor(private service:ServiceService,private sharedata:SharesrviceService){

}
// ngOnInit(): void {
//   this.service.getConnection().subscribe((data)=>{
//       console.log(data);
//       this.users=data;
      
// })
// }

sendData(userdata:any){
console.log(userdata);
  this.sharedata.sharedata(userdata)}



}





