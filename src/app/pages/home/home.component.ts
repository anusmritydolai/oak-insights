import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pipe = new DatePipe('en-IN');
  cards: any[] = [];
  month: string = this.pipe.transform(new Date(), 'MMMM') || '';

  events: any[] = [
    { list: new Date(), name: 'Spring Bank Holiday' },
    { list: new Date(), name: 'Spring Bank Holiday 2' },
    { list: new Date(), name: 'Spring Bank Holiday 3' },
    { list: new Date(), name: 'Spring Bank Holiday 4' },
  ];

  operatingHoursTotals: any[] = [
    {type:'Open Hours', value: '4000 kWH', color: 'var(--color8'},
    {type:'Prep Hours', value: '800 kWH', color: 'var(--color5'},
    {type:'Closed Hours', value: '1000 kWH', color:'gray'},
  ];


  oakScore: number = 0;
  newsData = [];
  weatherData: any;
  consumptionData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data: any) => {
      this.newsData = data.articles.slice(0, 3);
    })

    this.apiService.getWeather('kolkata,IN').subscribe((data: any) => {
      if (data.data && data.data.length > 0) {
        this.weatherData = data.data[0];      
      }
      this.updateMonth();
    })
  }
  
  updateMonth() {
    // console.log(this.month);
    this.apiService.getHomepageApi(this.month).subscribe((data: any) => {
      console.log(data);
      
      this.consumptionData = data.data.consumption_overview;
      this.oakScore = data.data.oak_score;
      this.cards = [
        {
          image: '/assets/icons/icon-energy-usage.svg',
          title: 'Energy Usage',
          value: data.data.stats.energy,
          unit: 'kWh',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-co2-emission.svg',
          title: 'CO2 Emission(kg)',
          value: data.data.stats.co2_emission,
          unit: 'kg',
          color: 'var(--color6)',
        },
        {
          image: '/assets/icons/icon-closed-hours.svg',
          title: 'Closed-hours',
          value: data.data.stats.closed_hour_energy,
          unit: 'kWh',
          color: 'var(--color8)',
        },
        {
          image: '/assets/icons/icon-energy-intensity.svg',
          title: 'Energy Intensity ',
          value: data.data.stats.energy_intensity,
          unit: 'kWh/m2',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-offset-planting.svg',
          title: 'Offset by Planting',
          value: data.data.stats.offset_planting,
          unit: 'Oak Trees',
          color: 'var(--color5)',
        },
        {
          image: '/assets/icons/icon-trend.svg',
          title: 'Trend vs Last Month',
          value: data.data.stats.trend_over_last,
          unit: '%',
          color: 'var(--color7)',
        },
      ];      
    })
    
  }
}