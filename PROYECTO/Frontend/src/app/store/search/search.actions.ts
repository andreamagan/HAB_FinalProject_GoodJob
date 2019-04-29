import { collections } from 'src/app/shared/models/search.models';

// export class SearchJobs {
//   static readonly type='[Search] SearchJobs';
//   constructor(public keyword: string) {}
// }


// export class SearchPlayers{
//   static readonly type='[Search] SearchJobs';
//   constructor(public keyword: string) {}
// }

// export class SearchTeams{
//   static readonly type='[Search] SearchJobs';
//   constructor(public keyword: string) {}
// }

export class Search {
  static readonly type = '[Search] Search';
  constructor(public keyword: string, public collection: collections) { }
}

export class SearchSuccess {
  static readonly type = '[Search] SearchSuccess';
  constructor(public results: any) { }
}

export class SearchFailed {
  static readonly type = '[Search] SearchFailed';
  constructor(public errors: Error[]) { }
}