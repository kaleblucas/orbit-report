import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }
  totalType(type: string, satelliteArray: Satellite[]){
    let matchingTypes: Satellite[] = [];
    type= type.toLowerCase();
    for(let i=0; i < satelliteArray.length; i++) {
      if (satelliteArray[i].type.toLowerCase().indexOf(type) >= 0) {
        matchingTypes.push(satelliteArray[i]);
      }
    }    
    return matchingTypes.length
  }
}