import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundColorDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
  activeToggle: boolean = true;

  constructor(private router: Router) { }

  jobsList(): void {
    this.activeToggle = true;
    this.router.navigate(['/jobs']);
  }

  favoriteJobs(): void {
    this.activeToggle = false;
    this.router.navigate(['/favorite-jobs']);
  }
}
