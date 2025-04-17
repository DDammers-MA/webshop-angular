
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})  
export class LoginService {
    httpClient = inject(HttpClient)
    login() { 
        return this.products('http://localhost:8080/api/login')
    }

    private products(url: string) {

        // return this.httpClient.post<any>(url)
        //     .pipe(map((resData) => resData.data))
        
    }
}