import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})


export class HeatMapComponent implements OnInit {

  heatmapranges: any[] = [
    {range:'100-200',color:'var(--heatmap-color1)'},
    {range:'200-400',color:'var(--heatmap-color2)'},
    {range:'400-600',color:'var(--heatmap-color3)'},
    {range:'600-800',color:'var(--heatmap-color4)'},
    {range:'800-1000',color:'var(--heatmap-color5)'},
  ];

  chart = new Chart({
    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 0,
      style: {
        fontFamily: 'Avenir-Roman',
        fontWeight: '800',
        fontSize:'1rem'
        }   
    },
    exporting: { enabled: false },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
    },
    yAxis: {
      title: {
        text: ''
      },
       //reversed:true
       labels: {
        enabled: false
        }
     },
    colorAxis: {
      stops: [
        [0.25, '#82c67c'],
        [0.5, '#f2c853'],
        [0.75, '#ecab5c'],
        [1, '#ee6259']
      ]
    },
    tooltip: {
      formatter: function () {
        return 'The value for x is <b>' + this.point.x +
                '</b> and y is <b>' + this.point.y + '</b>'+
                '</b> and value is <b>' + this.point.value + '</b>';
     }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      heatmap: {
        pointPadding: 3
      },
     
    },
    series: [{
      name: 'Monthly Consumption',
      borderWidth: 1,
      type: 'heatmap',
      //data:[{x:0,y:0,value:10,color:'#63c5bf'},{x:0,y:1,value:30,color:'#63c5bf'},{x:6,y:2,value:50,color:'#82c67c'}],
      data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 45], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96],]
    }]
  });

  ngOnInit() {
   
  }

}