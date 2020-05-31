import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites2: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  satCounter(satType: string) {
    let total: number = 0;
    if (satType == "all"){
      total = this.satellites2.length;
    } else {
      for (let i = 0; i < this.satellites2.length; i++){
      
        if(this.satellites2[i].type.toLowerCase() == satType.toLowerCase()){
          total += 1;
        }
      }
    }
    return total;
   }

}
