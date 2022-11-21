import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['/login']);
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
