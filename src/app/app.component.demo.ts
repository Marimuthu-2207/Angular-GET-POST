import { Component ,OnInit, Directive} from '@angular/core';

@Component({
  selector: 'app-root-demo',
  templateUrl: './app.component.initial.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponentDemo {

  title = 'Sumit Sahu';
  allowedToSave = false;
  firstName = '';
  lastName = 'Sahu Sumit';
  allowLastName = false;
  fruit;

  list = ['Apple','mango', 'WaterMelon','grapes'];

  ngOnInit(){

  }

  OnTextUpdate(event: Event){

    this.title = this.lastName;
    if(this.allowLastName){
      this.allowLastName = false;
    }
    else{
      this.allowLastName = true;
    }
      // this.firstName = (<HTMLInputElement>event.target).value;
      // if(this.firstName.length > 0){
      //   this.allowLastName = true;
      // }
      // else{
      //   this.allowLastName = false;
      // }
      // if(this.firstName.length > 7){
      //   this.allowedToSave = true;
      // }
      // else{
      //   this.allowedToSave = false;
      // }
  }

  addFruit(event : Event){
    console.log(event);
    let temp = (<HTMLInputElement>event.target).value;
    this.fruit = temp;
    console.log(this.fruit);
  }

  addToList(){
    this.list.push(this.fruit);
  }

}
