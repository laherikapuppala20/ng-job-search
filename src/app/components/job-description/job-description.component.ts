import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, DatePipe } from '@angular/common';
import { JobDetails } from '../../models/jobDetails';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css'
})
export class JobDescriptionComponent implements OnInit {
  jobId: number | undefined;
  jobDetails: JobDetails | undefined;
  constructor(private route: ActivatedRoute, private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id'];
      this.getDetails(this.jobId);
    })
  }

  getDetails(id: number) {
    this.jobService.getJobsDetials(id).subscribe((res) => {
      this.jobDetails = res;
    }, (error) => {
      alert("Error :" + error.message);
    })
  }

  backToHome(): void {
    this.router.navigate(['/jobs']);
  }
}

