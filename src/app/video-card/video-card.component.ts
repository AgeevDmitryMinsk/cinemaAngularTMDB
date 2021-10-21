import { Component, Input, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {

  //
  @HostListener('document:click', ['$event.target'])

  doSearch (element: any) {
    if(element.classList.contains('videoCard') ) {
      console.log('вы выбрали фильм:', element.querySelector('h2')!.textContent )
    }
  }

  @Input() movie: any;

   baseUrl = "https://image.tmdb.org/t/p/original/"

  constructor() { }


  ngOnInit(): void {
    console.log(this.movie.title !== undefined ? this.movie.title: this.movie.name);
    //console.log(this.baseUrl);
  }

}


