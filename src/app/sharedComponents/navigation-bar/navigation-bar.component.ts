import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.putEvents();
  }

  putEvents() {
    const menuDesktop = document.getElementById('desktop-menu');
    const navBartoggle = document.getElementById('toggle-action');

    navBartoggle.addEventListener('click', function () {
      menuDesktop.classList.toggle('active');
    });
  }
}
