
export interface Player {
  personalInfo: PersonalInfo;
  tags: any[];
  accountInfo: AccountInfo;
  avatarUrl: string;
  team?: any;
  background: Background;
}

export interface PersonalInfo {
  social: Social;
  fullName: string;
  nickName: string;
  description: string;
}

export interface Social {
  twitterUrl: string;
  twichUrl: string;
  instagramUrl: string;
}

export interface AccountInfo {
  email: string;
  password: string;
  createdAt: string;
  activatedAt: string;
  verificationCode: string;
  uuid: string;
  role: string;
}

export interface Experience {
  _id: string;
  company?: any;
  job?: any;
  dateStart?: any;
  dateEnd?: any;
}

export interface Education {
  _id: string;
  school?: any;
  degree?: any;
  dateStart?: any;
  dateEnd?: any;
}

export interface Background {
  experience: Experience[];
  education: Education[];
}


