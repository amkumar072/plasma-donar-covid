import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IonSearchbar, NavController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constant } from 'src/app/constants/constant';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.scss'],
})
export class TrackerListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('mySearchBar', { static: true }) searchbar: IonSearchbar;

  trackerListObserval$: Observable<Tracker[]>;

  trackerDataSource: MatTableDataSource<Tracker>;
  columnsToDisplay = ['firstName', 'mobile', 'area', 'city', 'state', 'isCovidPositiveRecovered', 'isReadyDonatePlasma',
    'isNotDonatedForPast30Days', 'bloodGroup'];
  resultsLength = 0;
  isLoadingResults = false;

  constructor(
    private trackerService: TrackerService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.fetchTrakerAll();
  }

  ngOnDestroy() {
    // this.trackerListObserval$.complete();
    // this.trackerListObserval$.complete();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.trackerDataSource.filter = filterValue.trim().toLowerCase();
  }

  onAdd() {
    this.navCtrl.navigateForward(Constant.URL_TRACKER_ADD);
  }

  private fetchTrakerAll() {
    // this.trackerListObserval$ = this.trackerService.getTrackerAll();
    this.isLoadingResults = true;
    this.trackerService.getTrackerAll().subscribe((res: Tracker[]) => {
      if (res) {
        this.trackerDataSource = new MatTableDataSource(res);
        this.resultsLength = res.length;
        this.trackerDataSource.paginator = this.paginator;
        this.trackerDataSource.sort = this.sort;

        this.isLoadingResults = false;
      }
    });
  }





}
