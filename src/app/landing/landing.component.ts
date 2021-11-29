import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{trigger, state, transition, style, animate, query, stagger} from '@angular/animations';
import $ from "jquery";



declare var particlesJS: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('landed',[
      transition('hide => show',[
        animate('1.4s', style({
            opacity:1,
            top : '0px',
            marginBottom: '0px'
        }))
      ]),
      transition('show => hide',[
        animate('1.4s', style({
            opacity:0,
            top : '0px',
            marginBottom: '-20px'
        }))
      ]),
    ]),
  ],
})

export class LandingComponent implements OnInit {

  constructor(public el : ElementRef) { }

  state = "show";
  @ViewChild("tester", {static: false}) divView: ElementRef;
  @HostListener('window:scroll', ['$event'])
      checkScroll() {
        const scrollPosition = window.pageYOffset
        if (scrollPosition >= 200) {
          this.state = "hide";
        } else {
          this.state = "show";
        }

      }

  ngOnInit(){
    particlesJS.load('particles-js', "../../assets/particles.json", function() { console.log('callback - particles.js config loaded'); });
  }


}
