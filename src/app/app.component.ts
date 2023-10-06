import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  stars: string[] = [];
  constructor() {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      rate: new FormControl(null, Validators.required),
    });
  }
  public onSubmit() {
    let rate: number = this.myForm.value.rate;
    let starsCount: number = Math.floor(rate);
    this.stars = this.generateStars(starsCount, rate);
    console.log(this.stars);
    // this.myForm.reset();
  }
  public generateStars(count: number, rate: number) {
    let starsArray: string[] = Array(count).fill('fa fa-star');
    if (rate > count) starsArray.push('fa fa-star half-star');
    return starsArray;
  }
}
