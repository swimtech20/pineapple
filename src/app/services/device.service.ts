import { DeviceTable } from '../models/device-table.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<DeviceTable> {
    return this.http.get<DeviceTable>('../../assets/devices.json');
  }

  getFiltered(str: string): Observable<DeviceTable> {
    let res: Observable<DeviceTable> = null;

    let temp = this.http.get<DeviceTable>('../../assets/devices.json');

    // search/filter logic

    return res;
  }
}
