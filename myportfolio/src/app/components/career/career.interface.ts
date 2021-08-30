export interface IExperience {
  company: string;
  link: string;
  joinedAt: string;
  endedAt: string | null;
  designation: string;
  roles: string[];
}

export interface IEducation {
  name: string;
  college: string;
  duration: string;
  marks: string;
}

export interface IAchievement {
  name: string;
  description: string;
  link: string | null;
}
