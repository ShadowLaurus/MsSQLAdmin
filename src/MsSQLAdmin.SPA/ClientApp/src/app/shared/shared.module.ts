import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLoaderComponent } from './shared-loader/shared-loader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedLoaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, SharedLoaderComponent],
})
export class SharedModule {}
