import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './responsive.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoElement')
  videoElementRef!: ElementRef;
  videoElement!: HTMLVideoElement;

  ngAfterViewInit(): void {
    this.videoElement = this.videoElementRef.nativeElement;
  }

  playBackground(): void {
    if (this.videoElement.paused) {
      this.videoElement.play();
    }
  }
}
