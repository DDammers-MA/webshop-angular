import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class usersService{
    httpclient = inject(HttpClient)


    loadUsers() {
        return this.users('http://localhost:8080/users')
        
    }

    private users(url: string) {
        return this.httpclient.get<any[]>(url)
            .pipe(map((res: any) => {
                item : res.data
            }))
    }
}