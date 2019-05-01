import { Component, OnInit } from '@angular/core';
import { ErrorState } from 'src/app/store/error/error.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PlayerState } from 'src/app/store/player/player.state';
import { Player } from 'src/app/shared/models/player.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UpdateTeamProfile } from 'src/app/store/team/team.actions';
import { PostJob } from 'src/app/store/job/job.actions';


@Component({
  selector: 'esn-job-form',
  templateUrl: './job-form.component.html',
})
export class JobFormComponent implements OnInit {
  @Select(ErrorState) errors$: Observable<Error>;
  @Select(PlayerState) player$: Observable<Player>;


  showMsg: boolean = false;

  jobForm = this.fb.group(
    {

      profileInfo: this.fb.group(
        {
          titleName: ['', [Validators.required]],
          description: ['', [Validators.required]],
        })
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.player$.subscribe(({ profileInfo, tags }) =>
      this.jobForm.setValue({
        profileInfo: {
          title: '',
          description: '',
        }
      })
    );
  }

  publishJob() {
    if (!this.jobForm.valid) {
      this.markFormGroupTouched(this.jobForm);
      return;
    }

    this.store.dispatch(new PostJob(this.jobForm.value));

    this.showMsg = true;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}