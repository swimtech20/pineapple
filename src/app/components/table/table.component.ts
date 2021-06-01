import { Component, OnInit } from '@angular/core';

import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';
import { DeviceTable } from 'src/app/models/device-table.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  deviceTable: DeviceTable;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.setupTable();
  }

  private setupTable(): void {
    this.deviceService.getAll().subscribe((data: DeviceTable) => {
      this.deviceTable = data;
    });
  }

  /**
   * Search Devices given search string (from input textbox)
   * @param e search event
   */
  searchDevices(e: any): void {
    console.log(e.target.value);
    let input: string = String(e.target.value);

    this.deviceService.getAll().subscribe((res: DeviceTable) => {
      console.log(res.rows.length);

      res.rows = res.rows.filter((r) => {
        r.device_category.includes(input) ||
          r.group.includes(input) ||
          r.model.includes(input) ||
          r.person.includes(input);
      });
      console.log(res.rows.length);

      this.deviceTable = res;
    });
  }
}
