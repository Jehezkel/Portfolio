import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Post } from '../post.model';
export const BASE_API_URL = 'https://localhost:7123/';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private client: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('En error occured:', error.error);
    } else {
      console.error(`Backend returned ${error.status} bodu was: `, error.error);
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
  getAllPosts() {
    return this.client
      .get<Post[]>(`${BASE_API_URL}Post`)
      .pipe(retry(3), catchError(this.handleError));
  }
}
