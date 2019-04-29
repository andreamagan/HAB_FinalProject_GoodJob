import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ErrorState } from 'src/app/store/error/error.state';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Error } from '../../models/error.models';
import { ResetErrors } from 'src/app/store/error/error.actions';

@Component({
  selector: 'esn-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnDestroy {
  @Select(ErrorState) errors$: Observable<Error[]>;

  constructor(private store: Store) { }
  closeIcon = faTimesCircle;

  resetErrors() {
    this.store.dispatch(new ResetErrors());
  }

  // getErrorMessage({ name, message }: Error) {
  //   if (name) {
  //     return name;
  //   }

  //   if (message) {
  //     return message;
  //   }
  // }

  ngOnDestroy() {
    this.store.dispatch(new ResetErrors());
  }
}
