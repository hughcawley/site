import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor() { }
  reviews = [
    {"reviewer" : "Donnacha", "title" : "CTO" , "company" : "Full Circle Electrical & Mechanical LTD.", "review":"Hugh was good at automating systems, helped save us time and money. A good asset to have on the technology side of the business"},
    {"reviewer" : "Marie", "link" : "https://www.podfurniture.ie", "title" : "Managing Director", "company" : "Podfurniture" , "review":"Creating & Monitroing the Website, Advertisings, Visual Design , Analytics and Support"},
    {"reviewer" : "Cian", "title" : "Owner", "link" : "https://www.troidmma.com" , "company" : "TroidMMA" , "review":"What a man What a man What a man What a mighty good man"}
  ]
  ngOnInit() {
  }

}
