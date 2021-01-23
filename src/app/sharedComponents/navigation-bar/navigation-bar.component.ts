import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router: Router) { }
  admin = 'false';

  ngOnInit(): void {
    console.log('teste');
    this.putEvents();
    this.admin = localStorage.getItem('admin');
  }

  putEvents() {
    const menuDesktop = document.getElementById('desktop-menu');
    const navBartoggle = document.getElementById('toggle-action');

    navBartoggle.addEventListener('click', function () {
      menuDesktop.classList.toggle('active');
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
