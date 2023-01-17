import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating:number=0;
  cropWidth:number=75;

  @Output() ratingClicked:EventEmitter<string>= new EventEmitter<string>();


  constructor(){

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating * 75/5;
  }
  ngOnInit(): void {
  }
  onClick():void{
    this.ratingClicked.emit(`the rating ${this.rating} is clicked`);
  }
}
