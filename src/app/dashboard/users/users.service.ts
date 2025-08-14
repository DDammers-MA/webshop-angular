import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { filter, map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class usersService{
    httpclient = inject(HttpClient)


    loadUsers(filter: Params = {}) {
        return this.users('http://localhost:8080/users', filter);
        
    }

    private users(url: string, filter: any) {

        const result = this.buildUrl(url, filter)

        return this.httpclient
            .get<any[]>(result.url, {
                params:result.params
            })
        .pipe(map((res: any) => ( res.data )));
    
  }

  updateUser(id: number, body: any) {
    return this.httpclient.put<any>(`http://localhost:8080/users/${id}`,
      body
    );
  }

  
  createUsers(body: any) {
    return this.httpclient.post<any>('http://localhost:8080/users', body)
  }


    public buildUrl(
        url: string,
        params?: Params,
      ): { url: string; params: Params } {
        let returnUrl = url
        params = {
          ...params,
          // x_rpp: 15,
          // x_lp: 1,
        }
        // if (!params['x_rpp']) {
        //   params['x_rpp'] = 15
        // }
        // if (this.options) {
        //   this.options.forEach((element) => {
        //     if (params && params[element]) {
        //       returnUrl += params[element] + "/";
        //       delete params[element];
        //     }
        //   });
        // }
        if (params) {
          // verwijder params met null waarde
          for (const element in params) {
            if (
              params[element] === null ||
              typeof params[element] === 'undefined' ||
              params[element] === 'undefined'
            ) {
              delete params[element]
            }
          }
          // Check voor iframe
          if (window.self !== window.top) params['iframe'] = 1
        } else {
          // Check voor iframe
          if (window.self !== window.top) params = { iframe: 1 }
        }
        return { url: returnUrl, params: params || {} }
      }
    }


    



