import { ProgressService } from './services/progress.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  public progressBar: any;
  constructor(private progressService: ProgressService) {
    this.progressService.getProgressBar()
      .subscribe(progress => {
        this.progressBar = progress;
      });
  }
}
