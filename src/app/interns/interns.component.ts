import { Component, OnInit } from '@angular/core';
import{Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-interns',
  templateUrl: './interns.component.html',
  styleUrls: ['./interns.component.css']
})
export class InternsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("line-chart", {
      type: 'line',
      data: {
          labels: ["Jan",	"Feb",	"March",	"April",	"May",	"June"],
          datasets: [{
              label: 'Full Time Interns', // Name the series
              data: [10,	12,	7,	25,	20,	15], // Specify the data values array
              fill: false,
              borderColor: '#2196f3', // Add custom color border (Line)
              backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
              borderWidth: 1 // Specify bar border width
          },
          {
            label: 'In-House Interns', // Name the series
            data: [12,	15,	7,	20,	22,	8], // Specify the data values array
            fill: false,
            borderColor: '#f05a28', // Add custom color border (Line)
            backgroundColor: '#f05a28', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }
          ]
        },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
      }
  });
  }

}
