import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fadeIn } from '../animations';
import { transition, trigger, useAnimation, state , style, animate} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('leaveEnter', [
      //  useAnimation(fadeIn)state('true', style({ height: '*' })),
      state('false', style({ opacity: '0' })),
      state('true', style({ opacity: '1' })),
    transition('false <=> true', animate(1200))
    ])
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  leaveEnter = false;
  @ViewChild("about",{static: false}) section: ElementRef;

  constructor() { }
  top: number = 0;

 @HostListener('window:scroll', ['$event']) scroll(e:any){
   this.top = this.section.nativeElement.offsetTop;
   console.log(window.scrollY);
   if((window.scrollY+ 350) > this.top){this.leaveEnter = true;}
  }
  ngOnInit() {
  }

}
