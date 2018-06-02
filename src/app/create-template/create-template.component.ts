import { Component, OnInit } from '@angular/core';
import { CreateTemplate } from '../createTemplateObject';

@Component({
  selector: 'create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
createTemplate = new CreateTemplate();
template = [];
  constructor() { }

  ngOnInit() {
    this.template = ["Screen1", "Screen2", "Screen3", "Screen4"];
  }
 onChange(screens) {
    //alert(typeof(question));
    this.createTemplate.screens.push(screens);
  }

   pushScreens() {
    //alert(JSON.stringify(this.createTemplate));
    alert("Template " + this.createTemplate.templateName + " has been created for " + this.createTemplate.oem + " with screens: " + this.createTemplate.screens);

  }
}
