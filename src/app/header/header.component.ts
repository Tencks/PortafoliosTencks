import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.component.scss' ]
})


export class HeaderComponent{

//NavigationEnd = false; 
isMenuOpen = false;

toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
  }

  NavigationEnd =false;
  
 // this.router.events.subscribe((event: Event) => {
 //   if (event instanceof NavigationEnd){ closeMenu(); }
// }

}
