import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth';
  private token: string | null = null; // 💾 in-memory token
  private username :string | null =null;


  constructor(private http: HttpClient, private router: Router) { }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(user: any) {
  return this.http.post<{ user: any; token: string }>(`${this.baseUrl}/login`, user,{ withCredentials: true });
}


    setToken(token: string) {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }

  setusername(name :string){
     this.username=name;
  }

  getusername(){
    return this.username;
  }

 

  refreshAccessToken() {
  return this.http.post<{ token: string }>(
    `${this.baseUrl}/refresh-token`, 
    {}, 
    { withCredentials: true }
  );
}

// auth.service.ts

initializeToken(): Promise<boolean> {
  return this.refreshAccessToken().toPromise()
    .then(res => {
      if (res && res.token) {
        this.setToken(res.token);
        return true;
      }
      this.logout();
      return false;
    })
    .catch(() => {
      this.logout();
      return false;
    });
}

logout() {
  // Clear access token from memory
  this.token = null;

  // Optionally also clear username or other info
  this.username = null;

  // Call backend to clear cookie
  return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
}


  getAllUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/users`,{ withCredentials: true });
  }

}
