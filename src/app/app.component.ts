import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewsModule } from './views/views.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
