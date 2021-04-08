import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

declare var $: any;


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss']
})
export class ShipsDetailsComponent implements OnInit, OnChanges {

  @Input() dataList = {};
  @Output() changePage = new EventEmitter();
  page = 1;
  config: any;
  shipId = '';
  url = '';
  // Modal
  titleDetails = '';
  modelDetails = '';
  starship_class = '';

  constructor() {
  }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.dataList.count
    };
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1);
    const id = this.shipId.replace(`http://swapi.dev/api/starships/`, '');
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    return urlImage;
  }

  pageChanged(event) {
    this.config.currentPage = event;
    this.changePage.emit(event);
    this.page = event;
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataList) {
      if (this.dataList.count !== undefined) {
        this.config = {
          itemsPerPage: 10,
          currentPage: this.page,
          totalItems: this.dataList.count
        };
        console.log(this.config)
      }
    }
  }

}
