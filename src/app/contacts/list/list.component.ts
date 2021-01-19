import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListContactsComponent implements OnInit {
  collection = { count: 600, data: [] };
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItens: this.collection.count

  };
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Proxima'};
  constructor() { }

  ngOnInit() {
    this.populateElements();
  }

  populateElements() {
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        posicao: i + 1,
        nome: 'teste' + i,
        email: 'email' + i + '@conntactura.com',
        fone: '(' + 0 + 1 + ')' + i + i + i + i + i +  '-' + i + i + i + i
      })
    }
  }

  onPageChange(event) {
    this.config.currentPage = event;
  }

}
