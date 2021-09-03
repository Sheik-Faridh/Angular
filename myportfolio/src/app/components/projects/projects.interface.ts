export interface IMainProjects {
  img_name: string;
  logo: string;
  description: string;
  name: string;
  stack: string[];
  link: string | null;
}

export interface IOtherProjects {
  name: string;
  link: string | null;
  github: string | null;
  description: string;
  stack: string[];
}

export interface IAnimation {
  animationState: 'active' | 'inactive';
}
