import { Component, OnInit } from '@angular/core';
import { ErrorState } from 'src/app/store/error/error.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PlayerState } from 'src/app/store/player/player.state';
import { Player } from 'src/app/shared/models/player.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdatePlayerProfile } from 'src/app/store/player/player.actions';
import { UrlValidator } from 'src/app/shared/validators/url.validator';
import { UpdateTeamProfile } from 'src/app/store/team/team.actions';


@Component({
  selector: 'esn-update-form',
  templateUrl: './update-form.component.html',
})
export class UpdateFormComponent implements OnInit {
  @Select(ErrorState) errors$: Observable<Error>;
  @Select(PlayerState) player$: Observable<Player>;

  showMsg: boolean = false;

  updateProfileForm = this.fb.group(
    {

      profileInfo: this.fb.group(
        {
          fullName: ['', [Validators.required]],
          nickName: ['', [Validators.required]],
          description: [''],
          social: this.fb.group({
            twitterUrl: ['', [UrlValidator]],
            instagramUrl: ['', [UrlValidator]],
            twitchUrl: ['', [UrlValidator]],
            webUrl: ['', [UrlValidator]]
          })
        }),
      // tags: [''],
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
    this.player$.subscribe(({ profileInfo, tags }) =>
      this.updateProfileForm.setValue({
        profileInfo: {
          fullName: '',
          nickName: '',
          description: '',
          social: {
            twitterUrl: 'https://twitter.com/',
            twitchUrl: 'https://www.twitch.tv/',
            instagramUrl: 'https://www.instagram.com/',
            webUrl: 'https://www.',
          },
          ...profileInfo,
          // tags: [],
        }
      })
    );
  }

  updateProfile() {
    if (!this.updateProfileForm.valid) {
      this.markFormGroupTouched(this.updateProfileForm);
      return;
    }

    if (!this.player$) {
      this.store.dispatch(new UpdatePlayerProfile(this.updateProfileForm.value));
    }
    this.store.dispatch(new UpdateTeamProfile(this.updateProfileForm.value));

    this.showMsg = true;
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
