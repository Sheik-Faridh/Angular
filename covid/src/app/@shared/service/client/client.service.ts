import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public handleError(error: any, msg: string) {
    if (error.error instanceof ErrorEvent)
      this.logError(`Error: ${error.error.message}`);
    else this.logError(this.getServerErrorMessage(error));
    return throwError(msg);
  }

  private logError(errorMsg: string) {
    console.error(errorMsg);
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    const errorMessage = {
      400: `Bad Request: ${error.message}`,
      404: `Not Found: ${error.message}`,
      403: `Access Denied: ${error.message}`,
      500: `Internal Server Error: ${error.message}`,
    };
    return error.status in errorMessage
      ? errorMessage[error.status as keyof typeof errorMessage]
      : `Unknown Server Error: ${error.message}`;
  }
}
