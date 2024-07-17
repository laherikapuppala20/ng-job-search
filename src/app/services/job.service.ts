import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobData, JobDetails } from '../models/jobDetails';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private favoriteJobs: JobData[] = [];
  private favoriteItems = 'favoriteJobs';

  constructor(private http: HttpClient) { 
    this.loadedFavorites();
  }
  
  getJobs(): Observable<JobData[]> {
    return this.http.get<JobData[]>('/jobs');
  } 

  getJobsDetials(job: number) {
    return this.http.get<JobDetails>('/jobs/' +job );
  }

  getFavoriteJobs(): JobData[] {
    return this.favoriteJobs;
  }
  private loadedFavorites(): void {
    const favorites = localStorage.getItem(this.favoriteItems);
    if (favorites) {
      this.favoriteJobs = JSON.parse(favorites);
    }
  }

  public addFavoriteJobs(): void {
    localStorage.setItem(this.favoriteItems, JSON.stringify(this.favoriteJobs));
  }
}
