import { HttpClient } from "@angular/common/http"
import { inject, Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({
    providedIn: 'root',
  })

export class AuthService {
    httpclient = inject(HttpClient)
    bearerToken: string = ''
    router = inject(Router)
    private _currentUser?: any;


    get currentUser(): any { 

        if (!this._currentUser?.id) {
            const localUser = localStorage.getItem('user');
            if (localUser) {
                this._currentUser = JSON.parse(localUser);
                // this._emailverified = this._currentUser.emailVerified;
              } else {
                this._currentUser = { id: null, email: '', is_admin: false };
              }
          
        }

        return this._currentUser;
    }


    signInWithForm(email: string, password: string) {
        const loginPayload = { email, password }

        this.httpclient.post<any>('http://localhost:8080/api/login', loginPayload).subscribe({
            next: (res) => {

                this.bearerToken = res.data

                localStorage.setItem('token', this.bearerToken)

                // Fetch the user data after login
                this.getUserFromApi().then((user) => {
                                
                    if (user.data && user.data.id) { // Ensure the user object is valid
                        localStorage.setItem('user', JSON.stringify(user.data))

                        if(user.data.is_admin) {
                            this.router.navigate(['/dashboard'])
                        } else {
                            this.router.navigate(['/'])
                        }
                        
                     
                    } else {
                        console.error('Invalid user data received from API')
                    }




                }).catch((err) => {
                    console.error('Error fetching user data:', err)
                })
            },
            error: (err) => {
                console.error('Login error:', err)
            }
        })
        
    }



    getUserFromApi(): Promise<any> {

   
        
        const token = this.bearerToken || localStorage.getItem('token') || '';
        const headers = {
            Authorization: `Bearer ${token}`
        };

        return this.httpclient.get('http://localhost:8080/api/user', {headers}).toPromise();
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.bearerToken = ''
        console.log('Logged out')
    }
    
    get isLoggedIn(): boolean {
        return !!localStorage.getItem('token')
      }
    
    //   get currentUser(): any {
    //     return JSON.parse(localStorage.getItem('user') || '{}')
    //   }
}