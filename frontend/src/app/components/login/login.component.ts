import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) { }



  login() {
    this.auth.login(this.user).subscribe({
      next: res => {

        this.auth.setToken(res.token);
        this.auth.setusername(res.user.name);

        this.router.navigate(['/dashboard']).then(success => {

        });
      },
      error: err => alert(err.error.message || 'Login failed')
    });
  }


}