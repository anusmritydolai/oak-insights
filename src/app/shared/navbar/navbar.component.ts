import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  host: { class: 'background-theme' },
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu = ['Home', 'Basic Insights', 'Deep Insights', 'Multi-site Comparison', 'Phase Distribution', 'Appliance Comparisons', 'Savings Calculator', 'Recommendations']
  constructor() { }

  ngOnInit(): void {
  }

}
