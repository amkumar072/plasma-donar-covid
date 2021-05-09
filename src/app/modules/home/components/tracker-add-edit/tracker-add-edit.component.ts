import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-tracker-add-edit',
  templateUrl: './tracker-add-edit.component.html',
  styleUrls: ['./tracker-add-edit.component.scss'],
})
export class TrackerAddEditComponent implements OnInit {

  constructor(
    private trackerService: TrackerService
  ) { }

  ngOnInit() {
    this.addTracker();
  }

  async addTracker() {
    const tracker = new Tracker();
    console.log(tracker);

    await this.trackerService.createTracker(tracker);
  }

}
