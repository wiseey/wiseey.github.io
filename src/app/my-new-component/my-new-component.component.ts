import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { DataService } from '../data.service';
import {trigger,state,style,transition,animation,animate,keyframes} from '@angular/animations'

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css'],
  animations:[
    trigger('myAnimation',[

      state('small', style({
        transform:'scale(1)'
      })),
      state('large', style({
        transform:'scale(1.2)'
      })),
      transition(
        'small <=> large', 
        animate('300ms ease-in', 
          keyframes([
            style({opacity:0, transform: 'translateY(-75%)',offset:0}),
            style({opacity:1, transform: 'translateY(35%)',offset:0.5}),
            style({opacity:1, transform: 'translateY(0%)',offset:1})
          ])
        )
      /*style({
        transform:'translateY(40px)'
      })*/),
    ])
  ]
})
export class MyNewComponentComponent implements OnInit {
  
  state:string = 'small'
  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small')
  }

  //Interpolation
  interpolation = "Nick Rocks!"

  myObject = {
    name: "Nick",
    age: 35
  }


  //Property bindings
  id="idTest "
  width="20"
  status = 'true'
  imageSrc = 'http://testcreative.co.uk/wp-content/uploads/2017/10/Test-Logo-Small-Black-transparent-1.png'

  myArr = ['him','her','Alien']

  myEvent(event){
    console.log("event called:",event)
  }


  //css bindings
  testCss = "testcss"
  propertyTurningClassOn = true
  testClasses ={
    "testcss": true,
    "testcssSize": true
  }

  //Services
  someProperty:string = ''

  //injected in via constructor..auto wired?
  constructor(private dataService:DataService ) {

  }

  ngOnInit() {
    console.log(this.dataService.cars.toString());
  
    this.someProperty = this.dataService.cars.toString();

  }

}
