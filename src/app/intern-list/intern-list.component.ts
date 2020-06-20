import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {

 
  
  studentDetails = [{
    name: 'Rachel Green',
    index: '1740',
    img:"../../assets/icons/in1.jfif",
    position:"Software Enginner Intern",
    university:"University Of Moratuwa",
    contactno:"0717686871",
    address:"Rajagiriya",
    projects:"Dotitude Platform",
    duration:"6 months"
   
  },
  {
    name: 'Chandler Bing',
    index: '1750',
    img:"../../assets/icons/in2.jfif",
    position:"Business Analyst Intern",
    university:"University Of Moratuwa",
    contactno:"0711812127",
    address:"Kaleniya",
    projects:"Finance  Platform",
    duration:"8 months"
    

  },
  {
    name: 'Pheobe Buffey',
    index: '1760',
    img:"../../assets/icons/in3.jfif",
    position:"Quality Analysis Intern",
    university:"University Of Moratuwa",
    contactno:"0714406370",
    address:"Moratuwa",
    projects:"Donation Platform",
    duration:"12 months"
  },
  {
    name: 'Joey Tribbiani',
    index: '1760',
    img:"../../assets/icons/in4.jfif",
    position:"Software Enginner Intern",
    university:"University Of Moratuwa",
    contactno:"0714406370",
    address:"Moratuwa",
    projects:"Educational  Platform",
    duration:"12 months"
  },
 
];

  constructor(public dialog:MatDialog) {}
    openDialog(intern)
    {
      this.dialog.open(DialogComponent,{
        data: intern,
        height: '600px',
        width: '700px',
      });
      
    }
   

  ngOnInit(): void {
  }

}
