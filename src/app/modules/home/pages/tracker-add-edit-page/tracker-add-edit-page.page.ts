import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-tracker-add-edit-page',
  templateUrl: './tracker-add-edit-page.page.html',
  styleUrls: ['./tracker-add-edit-page.page.scss'],
})
export class TrackerAddEditPagePage implements OnInit {
  @Input() id: string;

  form: FormGroup;
  tracker: Tracker;
  isEdit = false;
  displayButtonText: string;


  constructor(
    private trackerService: TrackerService
  ) { }

  ngOnInit() {

    if (!this.id) {
      this.tracker = new Tracker();

      this.isEdit = false;
      this.displayButtonText = 'Save';
      this.formControl();
    } else {
      // this.customerDetailById(this.id);
      this.isEdit = true;
      this.displayButtonText = 'Update';
    }
  }

  formControl() {
    this.form = new FormGroup({
      firstName: new FormControl(this.tracker.firstName, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      lastName: new FormControl(this.tracker.lastName, {
        updateOn: 'change'
      }),
      mobile: new FormControl(this.tracker.mobile, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      otherNumber: new FormControl(this.tracker.otherNumber, {
        updateOn: 'change',
      }),
      city: new FormControl(this.tracker.city, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      state: new FormControl(this.tracker.state, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      isCovidPositiveRecovered: new FormControl(this.tracker.isCovidPositiveRecovered, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      isReadyDonatePlasma: new FormControl(this.tracker.isReadyDonatePlasma, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      isNotDonatedForPast30Days: new FormControl(this.tracker.isNotDonatedForPast30Days, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      bloodGroup: new FormControl(this.tracker.bloodGroup, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  async addTracker() {
    const tracker = new Tracker();
    console.log(tracker);

    await this.trackerService.createTracker(tracker);
  }

}
