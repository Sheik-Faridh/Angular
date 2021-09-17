import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  IVaccinationCountRes,
  IVaccinationSlotRes,
} from '../../typings/vaccination.typing';
import { ClientService } from '../client/client.service';
import { getTodayDate } from '../../utils/helper.utils';

@Injectable({
  providedIn: 'root',
})
export class VaccinationService {
  constructor(private client: ClientService) {}

  getVaccinationLiveCount(): Observable<IVaccinationCountRes> {
    return this.client
      .get<IVaccinationCountRes>(
        'https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination'
      )
      .pipe(
        catchError((error) =>
          this.client.handleError(
            error,
            'Failed to get the vaccination count. please try again'
          )
        )
      );
  }

  getVaccinationSlots(queryString: string): Observable<IVaccinationSlotRes> {
    return this.client
      .get<IVaccinationSlotRes>(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/${queryString}`
      )
      .pipe(
        catchError((error) =>
          this.client.handleError(
            error,
            'Failed to get the vaccination slot. please try again'
          )
        )
      );
  }

  getVaccinationSlotByEntity(
    entityId: string,
    type: 'Pincode' | 'District'
  ): Observable<IVaccinationSlotRes> {
    const queryStringMap = {
      Pincode: `calendarByPin?pincode=${entityId}&date=${getTodayDate()}`,
      District: `calendarByDistrict?district_id=${entityId}&date=${getTodayDate()}`,
    };
    const queryString = queryStringMap[type as keyof typeof queryStringMap];
    if (!queryString) return throwError('Invalid type. Please try again');
    return this.getVaccinationSlots(queryString);
  }
}
