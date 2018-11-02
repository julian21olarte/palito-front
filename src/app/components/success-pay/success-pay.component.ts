import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-pay',
  templateUrl: './success-pay.component.html',
  styleUrls: ['./success-pay.component.scss']
})
export class SuccessPayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public ok() {
    this.router.navigate(['/search']);
  }

}
