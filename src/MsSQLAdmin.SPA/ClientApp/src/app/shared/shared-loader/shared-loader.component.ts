import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-loader',
  templateUrl: './shared-loader.component.html',
  styleUrls: [],
})
export class SharedLoaderComponent {
  @Input()
  isLoading: boolean;
}
