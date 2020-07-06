import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Api {

  apiBase = 'http://localhost:8000';
  constructor(private http: HttpClient) {

  }


  post(url: string, data: any): Promise<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.post(
        `${this.apiBase}${url}`,
        JSON.stringify(data),
        {
          headers,
          responseType: 'json'

        }).subscribe(
          info => {
            resolve(info);
          },
          error => {
            console.log(error);
            reject(error);
          });
    });
  }

  get(url: string, id: number): Promise<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.get(
        `${this.apiBase}${url}${id}`,
        { headers, responseType: 'json' }
      ).subscribe(
        info => {
          console.log(info);
          resolve(info);
        },
        error => {
          reject(error);
        });
    });
  }

  put(url: string, id: string, data: any): Promise<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.put(
        `${this.apiBase}${url}/${id}`,
        JSON.stringify(data),
        {
          headers,
          responseType: 'json'

        }).subscribe(
          info => {
            resolve(info);
          },
          error => {
            console.log(error);
            reject(error);
          });
    });
  }

  remove(url: string, id: string): Promise<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Promise((resolve, reject) => {
      this.http.delete(
        `${this.apiBase}${url}/${id}`).subscribe(
          info => {
            resolve(info);
          },
          error => {
            console.log(error);
            reject(error);
          });
    });
  }

}
