import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDistrictRes, IStateRes } from '../../typings/state.typing';
import { ClientService } from '../client/client.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  http!: HttpClient;

  constructor(private client: ClientService) {}

  getState(): Observable<IStateRes> {
    return this.client
      .get<IStateRes>('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      .pipe(
        catchError((error) => {
          return this.client.handleError(
            error,
            'Failed to get the state. please try again'
          );
        })
      );
  }

  getDistrictBasedOnState(stateId: string): Observable<IDistrictRes> {
    return this.client
      .get<IDistrictRes>(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`
      )
      .pipe(
        catchError((error) => {
          return this.client.handleError(
            error,
            'Failed to get the state. please try again'
          );
        })
      );
  }
}
