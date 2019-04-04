export interface Team {
  teamInfo: TeamInfo;
  tags: any[];
  players: any[];
  jobs: string[];
  accountInfo: AccountInfo;
  avatarUrl?: any;
}

export interface TeamInfo {
  fullName: string;
  shortName: string;
  description: string;
}

export interface AccountInfo {
  email: string;
  password: string;
  createdAt: Date;
  activatedAt: Date;
  verificationCode: string;
  uuid: string;
  role: string;
}
