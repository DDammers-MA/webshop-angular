
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})  
export class ProductService {
    httpClient = inject(HttpClient)
    loadProducts() { 
        return this.products('http://localhost:8080/products')
    }

    private products(url: string) {

        return this.httpClient.get<any>(url)
            .pipe(map((resData) => resData.data))
        
    }
}