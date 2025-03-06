import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

myForm!: FormGroup
 constructor(@Inject(MAT_DIALOG_DATA) public value: any,) {
      
console.log(value);

    // this.data1.push(value);
    // console.log(this.data1);
  }
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
    pid: new FormControl(),
    pname: new FormControl(),
    Role: new FormControl(),
    status: new FormControl()
  });

}



}
