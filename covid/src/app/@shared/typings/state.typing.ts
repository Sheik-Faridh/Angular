export interface IState {
  state_id: number;
  state_name: string;
}

export interface IStateRes {
  states: IState[];
  ttl: number;
}

export interface ISelectOption {
  id: number;
  name: string;
}

export interface IDistrict {
  district_id: number;
  district_name: string;
}

export interface IDistrictRes {
  districts: IDistrict[];
  ttl: number;
}

export type SelectStateType = 'normal' | 'error';
