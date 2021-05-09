export class Tracker {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  area: string;
  city: string;
  state: string;
  isCovidPositiveRecovered: string;
  isReadyDonatePlasma: string;
  isNotDonatedForPast30Days: string;
  bloodGroup: string;
  createdDate = new Date();
  updateDate: Date;
  createdBy: string;
  updatedBy: string;

  constructor() {
    this.firstName = 'madhan';
    this.lastName = 'tt';
    this.mobile = 'tt';
    this.area = 'tt';
    this.city = 'tt';
    this.state = 'tt';
    this.isCovidPositiveRecovered = 'yes';
    this.isReadyDonatePlasma = 'yes';
    this.isNotDonatedForPast30Days = 'yes';
    this.bloodGroup = 'tt';
    this.createdDate = new Date();
    this.updateDate = new Date();
    this.createdBy = 'tt';
    this.updatedBy = 'tt';
  }
}

export enum BloodGroup {
  ['A+'] = 'A+',
  ['A-'] = 'A-',
  // 'B+',
  // 'B-',
  // 'O+',
  // 'O-',
  // 'AB+',
  // 'AB-'
}
