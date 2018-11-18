import { Component, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  result = [];
  constructor(private http: HttpClient) {

  }
  // Montreal = {'Transportation': {'Metro':	[85, 51], 'Car': [700], 'Gasoline': [1.3966, 1.584],
  //  'Parking':	[10, 15], 'Insurance': [700], 'Registration': [300], 'Maintenance': [500], 'Tires': [800]}, 
  //  'Housing': {'1': [700], '2': [850], '3': [1200], 'Utilities': [61], 'Internet': [47]},
  //  'Living': {'1': [70], '2': [100], '3-4': [200], '5':[150], 'Eat out':[14,27], 'Entertainment': [50],
  //   'Clothing': [100], 'Care': 36.07 }, 
  //  'Education': {'Day care': [500], 'Tuition': []}};
  // Toronto = {'Transportation': {'Metro':	[146.25, 116.75], 'Car': [700], 'Gasoline': [1.373, 1.564],
  // 'Parking':	[12, 24], 'Insurance': [1500], 'Registration': [120], 'Maintenance': [500], 'Tires': [800]}, 
  // 'Housing': {'1': [1200], '2': [1400], '3': [1600], 'Utilities': [90], 'Internet': [45]},
  // 'Living': {'1': [70], '2': [100], '3-4': [200], '5':[150], 'Eat out':[17,33], 'Entertainment': [70],
  //  'Clothing': [100], 'Care': 38.79 }, 
  // 'Education': {'Day care': [1700], 'Tuition': []}};
 
  onSubmit() {
    // this.res = [this.adult, this.children, this.student, this.cityElem, this.transElem];
    const requestData = {
      "adult": this.adult,
      "children": this.children,
      "student": this.student,
      "city": this.cityElem,
      "transportation": this.transElem
    }
    const resp = this.http.post('http://142.93.146.100/easy-budget.ca/public_html/db_api.php', JSON.stringify(requestData));
    resp.subscribe(res => {
      console.log(res);
    }, (err) => {
      console.log(err.error.text);
    });
    this.onSubmitted = true;
    // if (this.cityElem == 'Montreal'){
    //   if (this.transElem == 'Public Transportation'){
    //     this.result.push(this.Montreal['Transportation']['Metro'])
    //   } else if (this.transElem == 'Car'){
    //     this.result.push(this.Montreal['Transportation']['Car'] + )
    //   }
    // }
  }
  ngOnChanges(): void {
    if (this.onSubmitted){
      console.log(this.res.data);
    }
  }
  reset() {
    window.location.reload();
  }
}
