import { State, Store, Action, StateContext, Selector } from "@ngxs/store";
import { Jobs } from 'src/app/shared/models/job.model';
import { JobService } from 'src/app/modules/jobs/services/job.service';
import { GetJobDetail, GetJobDetailFailed, GetJobDetailSuccess, PostJob, PostJobSuccess, PostJobFailed, GetNewJobs, GetNewJobsFailed, GetNewJobsSuccess, ApplyJob, ApplyJobSuccess, ApplyJobFailed } from './job.actions';
import { tap, catchError } from 'rxjs/operators';
import { SetErrors } from '../error/error.actions';
import { Navigate } from '@ngxs/router-plugin';
import { Logout } from '../auth/auth.actions';

@State<Jobs>({
  name: 'jobs',
  defaults: {
    jobDetail: {},
    newJobs: [],
  }
})

export class JobState {
  constructor(private jobService: JobService, private store: Store) { }

  @Selector()
  static getNewJobs({ newJobs }: Jobs) {
    return [...newJobs];
  }

  @Action(GetJobDetail)
  getJobDetail({ dispatch }: StateContext<Jobs>, { jobId }: GetJobDetail) {
    return this.jobService.getJobDetail(jobId).pipe(
      tap(jobDetail => dispatch(new GetJobDetailSuccess(jobDetail))),
      catchError(error => dispatch(new GetJobDetailFailed(error.error)))
    )
  }

  @Action(GetJobDetailSuccess)
  getJobDetailSuccess(
    { patchState, getState }: StateContext<Jobs>,
    { jobDetail }: GetJobDetailSuccess,
  ) {
    patchState({ jobDetail });
  }

  @Action(GetJobDetailFailed)
  getJobDetailFailed({ dispatch }: StateContext<Jobs>, { errors, }: any) {
    if (errors && errors.filter(error => error.status === 404).length > 0) {
      dispatch(new Navigate(['/page-not-found']))
    } else {
      dispatch(new SetErrors(errors));
    }
  }

  @Action(GetNewJobs)
  getNewJobs({ dispatch }: StateContext<Jobs>) {
    return this.jobService.getNewJobs().pipe(
      tap(newJobs => dispatch(new GetNewJobsSuccess(newJobs))),
      catchError(error => dispatch(new GetNewJobsFailed(error.error)))
    );
  }

  @Action(GetNewJobsSuccess)
  getNewJobsSuccess(
    { patchState }: StateContext<Jobs>,
    { newJobs }: GetNewJobsSuccess
  ) {
    patchState({
      newJobs
    })
  }

  @Action(ApplyJob, { cancelUncompleted: true })
  applyJob(
    { dispatch }: StateContext<Jobs>, { jobId, applicantUuid }: ApplyJob) {
    return this.jobService.applyJob(jobId).pipe(
      tap(() => dispatch(new ApplyJobSuccess())),
      catchError(error => dispatch(new ApplyJobFailed(error.error)))
    )
  }

  @Action(ApplyJobSuccess)
  applyJobSuccess(
    { setState, getState, patchState }: StateContext<Jobs>,
    { jobId, applicantUuid }: ApplyJob,
  ) {
    console.log(applicantUuid);
    // setState(
    //   getState().jobDetail.applicants[applicantUuid])
  }


  // @Action(PostJob)
  // postJob({ dispatch }: StateContext<Jobs>, { jobRequest }: PostJob) {
  //   const currentUser = this.store.selectSnapshot(state => state.auth);
  //   const team = currentUser.uuid;

  //   return this.jobService.postJob(jobRequest.title, jobRequest.description, jobRequest.tags).pipe(
  //     tap(job =>
  //       dispatch(
  //         new PostJobSuccess({
  //           ...job,
  //           jobId: null,
  //           team: team,
  //           createdAt: new Date().getTime(),
  //           deletedAt: null,
  //           applicants: [],
  //         })
  //       )
  //     ),
  //     catchError(error => dispatch(new PostJobFailed(error.error)))
  //   );
  // }

  // @Action(PostJobSuccess)
  // postJobSuccess(
  //   { setState, getState }: StateContext<Jobs>,
  //   { job }: PostJobSuccess
  // ) {
  //   setState([job, ...getState()]);
  // }


  @Action(Logout)
  logout({ setState }: StateContext<Jobs>) {
    setState(null);
  }

  @Action([GetJobDetailFailed, PostJobFailed, GetNewJobsFailed, ApplyJobFailed])
  error({ dispatch }: StateContext<Jobs>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }

}
