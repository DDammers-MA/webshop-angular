import { HttpClient } from "@angular/common/http"
import { inject, Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root',
  })

export class AuthService {
    httpclient = inject(HttpClient)
    bearerToken: string = ''


    signInWithForm(email: string, password: string) {
        const loginPayload = { email, password }

        this.httpclient.post<any>('http://localhost:8080/api/login', loginPayload).subscribe({
            next: (res) => {
                this.bearerToken = res.token
                localStorage.setItem('token', this.bearerToken)

                this.getUserFromApi().then((user) => {
                    localStorage.setItem("user", JSON.stringify(user))
                    console.log(user , 'succes')
                })
            },
            error: (err) => {
                console.log(err, 'error')
            }
        })
        
    }



    getUserFromApi(): Promise<any> {
        const token = this.bearerToken || localStorage.getItem('token') || '';
        const headers = {
            Authorization: `Bearer ${token}`
        };

        return this.httpclient.get('http://localhost:8080/api/user', { headers }).toPromise();
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
    
      get currentUser(): any {
        return JSON.parse(localStorage.getItem('user') || '{}')
      }
}