import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharesrviceService {
userdata=new EventEmitter<any>();
  constructor() { }


    sharedata(udata:any){
      this.userdata.emit(udata);

}
}
