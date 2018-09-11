import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepoInfoService {

  private githubApiUrl = 'https://api.github.com/repos/Ismaestro/angular6-example-app/git/trees/master?recursive=1';

  constructor(
    private httpClient: HttpClient) { 
    }
  
  getInfo(): Promise<any> {
    const options = {
      withCredentials: false
    };
    return this.httpClient.get(`${this.githubApiUrl}`, options)
    .toPromise()
    .then((data:any) => {
      return data;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
