import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-woman-org-chart',
  templateUrl: './woman-org-chart.component.html',
  styleUrls: ['./woman-org-chart.component.css']
})




export class WomanOrgChartComponent implements OnInit {

  headingContent:string = "More organizations are taking bold actions to advance women in 2023-but target setting hovers at 2019 levels.";

  constructor() { }

  ngOnInit(): void {
    this.RenderChart('line')
    this.RenderChart('line2')
    this.RenderChart('line3')
    this.RenderChart('line4')
  }

 

  items: any[] = [
    {
      "title": "All job succession plans must include women candidates",
    },
    {
      "title": "We have meaningful internship/entry level job opportunities for women where they are underrepresented",
    },
    {
      "title": "Senior management is held accountable for gender equity with clear performance metrics",
    },
    {
      "title": "We set workforce planning targets that include equal representation of women at all levels and roles",
    }
  ];



  RenderChart(id:any) {

    const myChart = new Chart(id, {
      type: 'line',
      data: {
        labels: ['2019', '2020', '2021'],
        datasets: [
          {
            backgroundColor: '#eeeee4',
            borderColor: '#eeeee4',
            data: [66, 48, 68, 0,100],
            fill: true,
            pointStyle: 'circle',
            pointBackgroundColor: ['blue', 'red', 'green'],
            pointRadius: 5,
          }
        ]

      },
      options: {
        responsive: true,
        interaction: {
          mode: 'nearest',
          axis:'x',
          intersect: false
        },
        plugins: {
          legend: {
            display: false
          }
        },
        layout: {
          padding: {
              bottom:-20,
          }
      },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
            grid:{
              lineWidth:1,
              tickLength:0,
              color:['blue','red','green']
            },
            ticks:{
              display:false,
              padding:0,
            }
            
          },
          y: {
            display: false,
          },
          
        }
      },
    })
  }

}
