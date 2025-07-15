import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})


export class DashboardComponent implements OnInit {
  userName: string | null = '';

  users: any[] = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.userName = this.auth.getusername();

     

      this.auth.getAllUsers().subscribe({

      next: data => {
        this.users = data;

      },
      error: err => {

        alert(err.error.message || 'Could not load users');
      }
    });
  
  }

 
  logout() {
    this.auth.logout().subscribe({
  next: () => {
    this.router.navigate(['/login']);
  },
  error: () => {
    // Even if error, force logout locally
    this.router.navigate(['/login']);
  }
});

  }
}



