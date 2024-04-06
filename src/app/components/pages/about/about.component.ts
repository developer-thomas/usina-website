import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './responsive.scss'],
})
export class AboutComponent {
  translateX: number = 0;
  translateY: number = 0;

  moveImage(event: MouseEvent) {
    // getBoundingClientRect retorna o tamanho do elemento e a posição viewport dele
    const containerRect = (event.target as HTMLElement).getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const offsetY = event.clientY - containerRect.top;

    const maxTranslate = 50;
    const percentX = (offsetX / containerRect.width - 0.5) * maxTranslate;
    const percentY = (offsetY / containerRect.height - 0.5) * maxTranslate;

    this.translateX = percentX;
    this.translateY = percentY;
  }

  resetImage() {
    this.translateX = 0;
    this.translateY = 0;
  }
}
