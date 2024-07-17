import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { JobData } from '../../models/jobDetails';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  jobsData: JobData[] = [];
  favoriteData: boolean[] = [];
  currentUrl: string = '';
  show: boolean = false;
  jobsDetailList: Subscription | undefined;
  favoriteJobs: JobData[] = [];
  
  constructor(private jobService: JobService, private route: Router) { }

  ngOnInit(): void {
    
    this.getjobList();
    this.jobsDetailList = this.jobService.getJobs().subscribe((res) => {
      this.jobsData = res;
    },
      (error) => {
        alert('Error in fetching jobs details:' + error.message);
      })

    this.currentUrl = this.route.url;
    if (this.currentUrl === '/favorite-jobs') {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  favoriteJob(jobId: number): boolean {
    return this.favoriteJobs.some(job => job.id === jobId);
  }

  toggleFavorite(id: number, job: JobData) {
    this.favoriteData[id] = !this.favoriteData[id];
    const index = this.favoriteJobs.findIndex((selectedItem) => selectedItem?.id === job?.id);
    if (index === -1) {
      this.favoriteJobs.push(job);
    } else {
      this.favoriteJobs.splice(index, 1);
    }
    this.jobService.addFavoriteJobs();
  }

  getjobList() {
    this.favoriteJobs = this.jobService.getFavoriteJobs();
  }

  ngOnDestroy() {
    this.jobsDetailList?.unsubscribe();
  }
}
