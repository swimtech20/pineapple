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
    let input: string = String(e.target.value).toLowerCase();
    console.log(input);

    this.deviceService.getAll().subscribe((res: DeviceTable) => {
      if (input.length > 0) {
        res.rows = res.rows.filter(
          (r) =>
            r.device_category.toLowerCase().includes(input) ||
            r.group.toLowerCase().includes(input) ||
            r.model.toLowerCase().includes(input) ||
            r.person.toLowerCase().includes(input)
        );
      }

      this.deviceTable = res;
    });
  }
}
