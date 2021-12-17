import { Component, OnInit, ViewChild, ElementRef,HostListener} from '@angular/core';
import { transition, trigger, useAnimation, state, style, animate } from '@angular/animations';
import { transAnimation, fadeIn } from '../animations';
import $ from "jquery";

@Component({
  selector: 'app-services',
  animations: [
trigger('leaveEnter', [
    useAnimation(fadeIn),
  state('false', style({ opacity: '0' })),
  state('true', style({ opacity: '1' })),
transition('false <=> true', animate(1400))
])
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @ViewChild("service",{static: false}) myDiv: ElementRef;
  @ViewChild("secttop",{static: false}) section: ElementRef;
  services = [
{"title": "Website Design & Development", "img" : "laptop-phone.svg", "tagline" : "Reach more customers & drive your business with a template driven or bespoke website" , "description" : "Build your online presence with a professionally designed & developed website that your customers can engage with. Customise your customer's online experience with bespoke web applications."},
{"title": "Automation Technician", "img" : "timer.svg","tagline" : "Save time & resources by automating your business' processes", "description" : "Remove human error and streamline your business using pre-programmed, custom API's. Allow for multiple software & applications to communicate with one another seemlessly."},
{"title": "Marketing & Advertising", "img" : "invest-monitor.svg", "tagline" : "Track your online performance, monitor campaigns & expand your market", "description" : "Find the best channel to boost your site's online performance. Build your audience &amp; conversions using targeted SEO and advertising campaigns"},
{"title": "Support & Maintenance", "img" : "magnifier.svg", "tagline" : "XYZ", "description" : "Whatever I.T. issues or questions you have, I'm here to help. I regularly tweak campaigns and ensure that on the technoloy side, your business is being taken care of."}
//{"title": "Graphic & Logo Design", "img" : "pallet.png", "tagline" : "XYZ", "description" : ""}
  ];
  Webbrands = [
    {"title": "Shopify", "img" : "shopify.png", "tag" :"E-commerce CMS "},
    {"title": "Wordpress", "img" : "wp.png", "tag" :"E-commerce CMS "},
    {"title": "Angular", "img" : "angular.svg", "tag" :"Web Design Framework  "},
    {"title": "Payment Gateway Setup", "img" : "atom.png", "tag" :"Code Editor  "},
    {"title": "Adobe Photoshop", "img" : "ps.jpg", "tag" :"Design & Photo-Editing "},
    {"title": "Adobe Illustrator", "img" : "ai.png", "tag" :"Illustrations Creator"},
    {"title": "Google My Business", "img" : "gmb.jpg", "tag" :"Google Business Manager  "},
  ];
  Markbrands = [
    {"title": "E-mail Design", "img" : "atom.png", "tag" :"Code Editor  "},
    {"title": "Hootsuite", "img" : "hoot.jpg", "tag" :"Social Media Management  "},
    {"title": "FB & IG Advertising", "img" : "fb.png", "tag" :"Desc:Social Media Advertising  "},
    {"title": "Google Ads", "img" : "gads.png", "tag" :"Advertising Via Google   Proficiency Level: Certified"},
    {"title": "Pipedrive", "img" : "pd.jpg", "tag" :"Lead Management CRM  "},
    {"title": "Hubspot", "img" : "hub.jpg", "tag" :"Focused CRM "},
    {"title": "LinkedIn", "img" : "linked.png", "tag" :"Business Network"},
    {"title": "Mailchimp", "img" : "mailc.png", "tag" :"Email Marketing Platorm"},
    {"title": "Monday.com", "img" : "monday.png", "tag" :"Project Managmement Software"}
  ];
  Automationbrands = [
    {"title": "Zapier", "img" : "zapier.png", "tag" :"Automation Software"},
    {"title": "GSuite", "img" : "gsuite.jpg", "tag" :"Business Process Automation Tool"},
    {"title": "Custom APIs", "img" : "atom.png", "tag" :"Automate Between Systems"},
    {"title": "Google Ads", "img" : "gads.png", "tag" :"Advertising Via GoogleProficiency Level: Certified"},
    {"title": "Mailchimp", "img" : "mailc.png", "tag" :"Email Marketing Platorm   "}
  ];
Analyticsbrands = [
    {"title": "Google Analytics", "img" : "ga.png", "tag" :"Website Analytics  Proficiency Level: Certified"},
    {"title": "Google Data Studio", "img" : "gds.png", "tag" :"Data Visualisation & Reporting   Proficiency Level: Certified"},
    {"title": "Google Search Console", "img" : "gsc.jpg", "tag" :"SEO Management "},
    {"title": "Google Lighthouse", "img" : "lighthouse.png", "tag" :"Technical SEO Audit "},
    {"title": "Ahrefs", "img" : "ahrefs.jpg", "tag" :"SEO Reporting Tool "},
    {"title": "Hootsuite", "img" : "hoot.jpg", "tag" :"Social Media Management "}
  ];
  leaveEnter = false;
  expanded;
  constructor() { }

   toggle(expand) {
 this.expanded = expand;
 console.log(expand);
   }
   top: number = 0;

  @HostListener('window:scroll', ['$event']) scroll(e){
this.top = this.section.nativeElement.offsetTop;
//this.top = this.section.nativeElement.offsetTop + this.myDiv.nativeElement.offsetTop
  if((window.scrollY + 350) > this.top){this.leaveEnter = true;}
  //if( top < 900){console.log(top);console.log(this.myDiv);}
}
  ngOnInit() {
console.log(this.top);
  }
}
