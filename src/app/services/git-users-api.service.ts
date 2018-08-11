import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Http, Response, URLSearchParams, RequestOptions } from "@angular/http";

@Injectable()
export class GitUsersApiService {

  private apiLoginSearchUrl = 'https://api.github.com/search/users';
  private apiProfileSearchUrl = 'https://api.github.com/users';
  $usersSubscription: Subject<any> = new Subject();
  isRequestAvailable: boolean;

  constructor(private http: Http) {
    this.isRequestAvailable = true;
  }

  public getUsersDataBunch( searchLogin: string, usersAmount: number ) {

    const requestUrl = `${this.apiLoginSearchUrl}?q=${searchLogin}`;

    if ( !this.isRequestAvailable ) { return; }
    this.isRequestAvailable = false;

    this.http.get(requestUrl)
        .toPromise()
        .then((succes) => {
          var responce = succes.json();
          if(responce.total_count && responce.items.length > 1 ) {
            this.$usersSubscription.next({
              total_amount: responce,
              items: responce.items.slice(0, usersAmount)
            });
            this.isRequestAvailable = true;
          }
        })
        .catch(this.handleError);

    return this.$usersSubscription;
  }

  public getUserData( searchLogin: string ) {

    const requestUrl = `${this.apiProfileSearchUrl}/${searchLogin}`;

    return this.http.get(requestUrl)
        .toPromise()
        .then((succes) => {
            var responce = succes.json();
            if( responce.login ) {
              return responce;
            }
        })
        .catch(this.handleError);
  }

  private handleError(error: any): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }

}
