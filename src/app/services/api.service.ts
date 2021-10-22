import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment, serviceBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  pipe = new DatePipe('en-IN');

  constructor(private httpClient: HttpClient) {}

  getMonthFromDate(date: Date) : string {
    return this.pipe.transform(date, 'MMMM') || '';
  }

  public getNews(): Observable<any> {
    return this.httpClient.get(environment.NewsApi);
  }

  public getWeather(location: string): Observable<any> {
    return this.httpClient.get(
      environment.WeatherApi + 'city=' + location + environment.WeatherKey
    );
  }



  public getHomepageApi(month: String, year: String): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/home?month=' + month + '&year=' + year +
       '&site_id=' + localStorage.getItem('site_slug'), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }

  public getMyprofileApi(): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'auth/me', { 
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }); 
    } else return of(null);
  }

  public getHeatMapData(month: String, year: String): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/consumption/month/hour?month=' + month + '&year=' + year +
      '&site_id=' + localStorage.getItem('site_slug'), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }


  public getOperatingHoursData(month: String, year: String): Observable<any> {

    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/consumption/operating/weekday?month=' + month + '&year=' + year +
      '&site_id=' + localStorage.getItem('site_slug'), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }


  public getHourlyCostData(month: String, year: String): Observable<any> {
    
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/cost/hour?month=' + month + '&year=' + year +
      '&site_id=' + localStorage.getItem('site_slug'), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }

  public getMonthlyUsageData(): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/consumption/yearly/month', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }

  public getStockChartData(month: Date, type: String, graph: String): Observable<any> {
    
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'insights/' + graph + '/minute?month=' + this.getMonthFromDate(month) + '&year=' +
      + month.getFullYear() + '&field=' + type + '&site_id=' + localStorage.getItem('site_slug'), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }

  public getPhaseStockChartData(month: Date, type: String): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'insights/phase/minute?month=' + this.getMonthFromDate(month) + '&field=' + type +'&year=' +
      + month.getFullYear() + '&site_id=' + localStorage.getItem('site_slug'),{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }


  // public getStockChartData(month: String): Observable<any> {
    
  //   if (localStorage.getItem('token')) {
  //     return this.httpClient.get('https://demo-live-data.highcharts.com/aapl-c.json');
  //   } else return of(null);
  // }

  public getEvents(monthList: any): Observable<any> {
    if (localStorage.getItem('token')) {
      return this.httpClient.get(serviceBaseUrl + 'site/events?month=' + monthList.month + '&year=' +
       + monthList.year + '&site_id=' + localStorage.getItem('site_slug'),{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } else return of(null);
  }
}
