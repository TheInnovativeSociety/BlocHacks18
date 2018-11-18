import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  title = 'easy-budget';
  onSubmitted = false;

  adult = 0;
  children = 0;
  student = 0;
  cityElem = 'Montreal';
  transElem = 'Public Transportation';
  cities = ['Montreal', 'Toronto'];
  transportations = ['Public Transportation','Car','Walk'];
  res: any;

  onSubmit() {
    this.res = [this.adult, this.children, this.student, this.cityElem, this.transElem];
    this.onSubmitted = true;
  }
  ngOnChanges(): void {
    if (this.onSubmitted){
      console.log(this.res);
    }
  }
  reset() {
    window.location.reload();
  }
}
