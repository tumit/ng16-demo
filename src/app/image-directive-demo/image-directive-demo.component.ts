import { CommonModule, IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-directive-demo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-directive-demo.component.html',
  styleUrls: ['./image-directive-demo.component.scss'],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) =>  {
        console.log(config)
        const size = config?.width ? config.width + '-' : '';
        return `http://localhost:4200/assets/img/${size}${config.src}`
      }
    }

  ]
})
export class ImageDirectiveDemoComponent {

}
