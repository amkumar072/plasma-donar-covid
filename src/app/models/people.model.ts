export class People {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  area: string;
  city: string;
  state: string;
  isCovidPositiveRecovered: boolean;
  isReadyDonatePlasma: boolean;
  isNotDonatedForPast30Days: boolean;
  bloodGroup: string;
  createdDate: Date;
  updateDate: Date;
  createdBy: string;
  updatedBy: string;

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
