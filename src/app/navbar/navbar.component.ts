import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  // private isClicked = false;
  public isClicked = false;

  

  constructor() {

  }

  onCLicked = () => {
    this.isClicked= !this.isClicked;

  }

}
