import { Component, OnInit ,HostListener} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CaseObject } from '../../assets/case';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  expanded : CaseObject;
  testtools : [];
  cases =[
    {"title" : "Jellybean", "anchor" : "https://www.jellybeangroup.com" , "img": "jb.png", "skills": ["Website Management", "Ecommerce Stock Management Automation", "Stock Management", "Google Advertising (Shopping & Adwords)", "Google Analytics Reporting" , "Email Design & Marketing", "Maintenance & Support"], "desc" : "M first job in the field! Initially with Jellybean I was brought on to ovesee their website from a functionality & visual standpoint. I was tasked with making small edits to the site or to manage the stock we had on the ecommerce site. As time went on, I was given more responsibility. I was put in charge of advertising, analysing our audience and building our online presence. I really appreciated this job for giving me a wealth of real-world experience in a number of fields within IT.","duration" : "3+ Years", "tools" : ["HootSuite", "Google Adwords", "Google Analytics", "Google Search Console", "Content Management Systems"], "dimg" : "jb1.png"},

    {"title" : "Podfurniture" , "anchor" : "https://www.podfurniture.ie" , "img": "Pod.png", "skills": ["Website Design", "Automation Engineer", "Stock Management", "Search Engine Optomization", "Responsive Website Development", "Ecommerce Stock Management", "Maintenance & Support", "Email Design & Marketing", "Google Advertising (Shopping & Adwords)", "Social Media Advertising (Instagram & Facebook)", "Custom Web application Development", "Google Analytics Reports", "Custom Domain Email Setup" ] , "desc" : "Podfurniture was my first experience working with a brand new business. I was in charge of the technological side of the business. I designed and built the website, managed SEO, managed the advertising campaigns. Compared to my work with jellybean I was more hands on with the other side of the businesss and built automation systems to assist in the logging of online sales through our POS system, Lightspeed", "dimg" : "pod1.png" , "mimg" : "pod2.png","duration" : "2+ Years", "tools" : ["Adobe Photoshop","HootSuite", "Facebook & Instagram Advertising", "Facebook & Instagram Shopping", "Google Adwords", "Google Analytics", "Google Search Console", "Content Management Systems", "Woocommerce", "POS Provider", "Adobe Illustrator"]},

    {"title" : "Studio Minti", "img": "minti.png", "skills": ["Web Design", " AWS Web Hosting", "Maintenance & Support"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "3+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Amazon Web Services"]},

    {"title" : "DND Detailing", "img": "dnd.png", "skills": ["Logo Design", "Automation Systems Development", "Maintenance & Support"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "8+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Pipedrive CRM"]},

    {"title" : "Quick Electric Cork" , "anchor" : "https://www.quickelectriccork.com" , "img": "QEC.jpg", "skills": ["Google Advertising: Adwords", "Search Engine Optomization", "Google Analytics Reports", "Google Search Console", "Responsive Website Design", "Maintenance & Support","Website Development", "Google My Business Management"] , "desc" : "This project was quite small when compared to my others? I worked simply designed, set up and developed the website. Following this I set up and monitor Google Ads and SEO in order to build leads and drive business." , "dimg" : "quick1.png", "mimg" : "QEC2.png","duration" : "1 Year", "tools" : ["Adobe Photoshop", "Google Adwords", "Google Analytics", "Google Search Console", "Wordpress"]},

    {"title" : "TroidMMA" , "anchor" : "http://troidmma.com" , "img": "troid.png", "skills": ["Website Design", "Logo Design", "Website Development", "Website Development"]  , "desc" : "A client wanted help with designing a Logo and website. I designed te logo then designed the website?", "dimg" : "troid1.png", "mimg" : "troid2.png","duration" : "1 Week", "tools" : ["Adobe Photoshop", "Google Analytics", "Google Search Console", "Content Management Systems", "Wordpress", "Adobe Illustrator"]},
    //{"title" : "Full Circle E&M LTD", "img": "FCEM.png", "skills": ["Logo Design", "Automation Systems Development", "Maintenance & Support"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "8+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Pipedrive CRM"]},
    {"title" : "AOR Plastering", "img": "FCEM.png", "skills": ["Maintenance & Support", "Google Advertising: Adwords", "Google My Business Management", "Website Design & Development"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "2 Years", "tools" : ["Adobe Illustrator"]},


    {"title" : "Footfall", "img": "footfall.png", "skills": ["Graphic Design", "Content-Writing" ,"Google Analytics Reporting", "Search Engine Optomization", "Email Design & Marketing" "Maintenance & Support", "Website Design & Development"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "8+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Pipedrive CRM", "TrustPilot"]},



    {"title" : "ClareDogTraining", "img": "FCEM.png", "skills": ["Social Media Advertising (Instagram & Facebook)", "Maintenance & Support", "Google Advertising (Display & Adwords)", "Website Design & Development"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "2 Months", "tools" : ["Wordpress", "Google Ads"]},



    {"title" : "Camerakit", "img": "ck.png", "skills": ["Website Development", "Automation Systems Development", "Maintenance & Support"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "6+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Pipedrive CRM"]},


    {"title" : "Ocean Sands Hotel", "img": "os.png", "skills": ["Graphic Design", "Search Engine Optomization" , "Web Design", "Maintenance & Support"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "6+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Netafinity"]},

    {"title" : "Azzurri Print", "img": "ap.jpeg", "skills": ["Website Design & Development", "Payment Gateway Setup", "Graphic Design", "GTM Setup", "Facebook Pixel Setup"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "3+ Months", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" ]},


    {"title" : "The Heart Angel", "img": "FCEM.png", "skills": ["Website Design & Development", "Maintenance & Support", "Google Analytics Reporting"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "1 Month", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Pipedrive CRM"]},

    {"title" : "Linehans Construction", "img": "linehan.png", "skills": ["Website Design & Development", "Google Analytics Reporting", "Search Engine Optomization"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "1 Month", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Pipedrive CRM"]},

    {"title" : "Mortgage123", "img": "mort.png", "skills": ["Website Design & Development", "Google Analytics Reporting", "Maintenance & Support", "Search Engine Optomization"] , "desc" : "With Full Circle, my tasks focus around maintaining their online ?? looking for ways to streamline their tech side of things & developing automation systems. I have developed stock ordering, stock management, holiday processing and software and XYZ","duration" : "1 Month", "tools" : ["Adobe Illustrator", "Google Admin", "Google Script Editor", "Custom API's" , "Pipedrive CRM"]}
  ]

  ngOnInit() {
  }
  @HostListener('mouseover', ['$event.target']) onMouseOver(e){
  //if( top < 900){console.log(top);console.log(this.myDiv);}
}
  toggleDisplay(expanded){
    console.log(expanded);
    if(this.expanded == expanded)
      this.expanded = null;
    else
      this.expanded = expanded;
  }

}
