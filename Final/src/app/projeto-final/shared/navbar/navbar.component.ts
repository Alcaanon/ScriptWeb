import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Login: boolean = true;
  clicar() {
    if (this.Login) {
      this.Login = !this.Login;
    } else {
      this.Login = !this.Login;
    }
  }

}
