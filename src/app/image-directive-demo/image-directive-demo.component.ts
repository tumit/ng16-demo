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
        const name = config.src.replace('.jpg', '')
        const size = config?.width ? 'w_' + config.width : 'w_200';
        return `/assets/img/${name},${size}.jpg`
      }
    }

  ]
})
export class ImageDirectiveDemoComponent {

}
