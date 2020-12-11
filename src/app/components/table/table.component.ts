import { Component, OnInit } from '@angular/core';
import { DeviceTable } from 'src/app/models/device-table.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  deviceTable: DeviceTable;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.setupTable();
  }

  private setupTable(): void {
    this.deviceService.getAll().subscribe((data: DeviceTable) => {
      this.deviceTable = data;
    });
  }

}
