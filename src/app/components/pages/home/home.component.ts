import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

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
      highlightColor: 0x4a4e69,
      midtoneColor: 0x14213d,
      lowlightColor: 0x081c15,
      baseColor: 0x262a13,
      blurFactor: 0.48,
      speed: 0.8,
      zoom: 0.7,
      alpha: 0.1,
    });
  }
}
