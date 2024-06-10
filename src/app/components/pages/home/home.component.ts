import { Component, OnInit } from '@angular/core';

declare var VANTA: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './responsive.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    VANTA.FOG({
      el: '#home-section',
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 100,
      minWidth: 200,
      highlightColor: 0x000,
      midtoneColor: 0x000,
      lowlightColor: 0x081c15,
      baseColor: 0x14213d,
      blurFactor: 0.48,
      speed: 3.8,
      zoom: 4.0,
    });
  }
}
