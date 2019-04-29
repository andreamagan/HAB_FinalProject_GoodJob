export interface Team {
  profileInfo: ProfileInfo;
  tags: any[];
  players: any[];
  jobs: string[];
  accountInfo: AccountInfo;
  avatarUrl?: any;
}

export interface ProfileInfo {
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
