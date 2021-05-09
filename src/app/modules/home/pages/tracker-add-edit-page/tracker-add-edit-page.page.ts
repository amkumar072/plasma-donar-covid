import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Constant } from 'src/app/constants/constant';
import { Tracker } from 'src/app/models/tracker.model';
import { AuthService } from 'src/app/services/auth.service';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-tracker-add-edit-page',
  templateUrl: './tracker-add-edit-page.page.html',
  styleUrls: ['./tracker-add-edit-page.page.scss'],
})
export class TrackerAddEditPagePage implements OnInit {
  @Input() id: string;

  currentUser: string;
  form: FormGroup;
  tracker: Tracker;
  isEdit = false;
  displayButtonText: string;
  lists = ['Yes', 'No'];
  bloodGroupList = [
    'A+',
    'A-',
    'B+',
    'B-',
    'B-',
    'B-',
    'AB+',
    'AB-'
  ];
  stateLists = Constant.stateList;

  constructor(
    private trackerService: TrackerService,
    private navCtrl: NavController,
    private authService: AuthService,
    private loadinCtrl: LoadingController
  ) { }

  ngOnInit() {

    this.authService.userName.subscribe((userName) => {
      this.currentUser = userName;
    });

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

  onCancel() {
    this.navCtrl.back();
  }

  async onClick() {


    if (this.form.invalid) {
      console.log('test');
      this.form.markAllAsTouched();
      return;
    } else if (!this.isEdit) {
      await this.onAdd();
    } else {
      // await this.onUpdate();
    }
  }


  async onAdd() {
    const loading = await this.loadinCtrl.create({ message: 'Saving..,' });

    loading.present();
    const tracker: Tracker = this.form.getRawValue();
    tracker.createdBy = this.currentUser;
    await this.trackerService.createTracker(tracker);
    await loading.dismiss();

    this.onCancel();

  }


}
