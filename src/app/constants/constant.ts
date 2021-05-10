import { environment } from 'src/environments/environment';

/* eslint-disable @typescript-eslint/naming-convention */
export class Constant {
  static readonly stateList: string[] = [
    'Andaman and Nicobar Islands',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chandigarh',
    'Chhattisgarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Ladakh',
    'Lakshadweep',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Puducherry',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];


  static readonly AUTH_DATA_STORAGE = 'AuthDataStorage';



  // css class
  static readonly MODAL_75_PERCENTAGE_SCREEN: string = 'modal-75-percentage-screen';
  static readonly MODAL_FULL_SCREEN: string = 'modal-fullscreen';

  // AppURL

  static readonly AUTH = '/auth';
  static readonly HOME = '/home';
  static readonly URL_TRACKER_ADD = 'home/add';
  static readonly URL_TRACKER_EDIT = 'home/edit';


  public static readonly COLLECTION_TRACKER_URL = `/${environment.dbPrefix}-tracker`;
}
