import { Component, OnInit, HostListener } from '@angular/core';
import { PlayFinderService } from '../services/play-finder.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayFinder } from '../playfinder.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultListing: PlayFinder[] = [];
  isAvailable: boolean = false
  pfModel: PlayFinder = {
    id: '32990',
    type: '',
    attributes: {
      starts: '2018-01-01',
      ends: '2018-01-01',
      price: '',
      admin_fee: '',
      currency: '',
      availabilities: 0
    }
  };

  constructor(
    private playFinderService: PlayFinderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchPitches(event) {
    this.playFinderService.getPitches(
      event.id,
      event.attributes.starts,
      event.attributes.ends)
      .subscribe(response => {
        if (response['data'].length === 0) {
          this.isAvailable = true;
          return
        }
        this.resultListing = response;
        this.isAvailable = false;

        const urlTree = this.router.createUrlTree([], {
          queryParams: { starts: event.attributes.starts, ends: event.attributes.ends },
          queryParamsHandling: "merge",
          preserveFragment: true
        });

        this.router.navigateByUrl(urlTree);
      }, error => {
        this.isAvailable = true
      })
  }

}
