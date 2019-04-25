import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, switchMap, debounceTime, map, filter } from 'rxjs/operators';
import { Search, SearchSuccess } from 'src/app/store/search/search.actions';

@Component({
  selector: 'esn-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') input: ElementRef;

  constructor(private store: Store) { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        //filter(text => text.length > 2),
        distinctUntilChanged(),
        switchMap((s, c) => this.store.dispatch(new Search(s)))
        //si pongo Search(s,c)  me da el error:ERROR in src/app/modules/home/components/search/search.component.ts(24,63): error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
      )
      .subscribe();
  }

  search(event) {
    const collection = "jobs"
    this.store.dispatch(new Search(event.target.value, collection))
  }
}
