import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Tracker } from '../models/tracker.model';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  trackerList: BehaviorSubject<Tracker[]> = new BehaviorSubject<Tracker[]>(null);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  private COLLECTION_TRACKER = 'tracker';

  constructor(
    private db: AngularFirestore
  ) { }


  getTrackerAll(): Observable<Tracker[]> {
    return this.trackerList.asObservable()
      .pipe(tap((res: Tracker[]) => {
        if (res) {
          return res;
        } else {
          return this.getTrackerAllInDb();
        }
      }));
  }

  async getTrackerAllInDb(): Promise<Tracker[]> {
    const trackerList: Tracker[] = [];

    return this.db.collection(this.COLLECTION_TRACKER).get().pipe(
      map((res) => {
        res.docs.forEach(doc => {
          const data: any = doc.data();
          data.id = doc.id;
          trackerList.push(data);
        });
        this.trackerList.next(trackerList);
        // eslint-disable-next-line no-console
        // console.debug('trackerList :: getTrackerAllInDb ' + JSON.stringify(trackerList));
        return trackerList;
      })
    ).toPromise();

  }

  async createTracker(tracker: Tracker): Promise<void> {
    // await this.db.collection(this.COLLECTION_TRACKER).add(tracker);
    await this.db.collection(this.COLLECTION_TRACKER).doc().set(Object.assign({}, tracker));
    await this.getTrackerAllInDb();
  }
}