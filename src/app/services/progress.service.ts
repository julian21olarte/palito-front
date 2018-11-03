import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public progressBar: boolean;
  public progressBarObservable: BehaviorSubject<any>;
  constructor() {
    this.progressBarObservable = new BehaviorSubject(this.progressBar);
  }

  public showProgressBar() {
    this.progressBarObservable.next(true);
  }

  public hideProgressBar() {
    this.progressBarObservable.next(false);
  }

  public getProgressBar() {
    return this.progressBarObservable.asObservable();
  }
}
