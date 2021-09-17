export interface IVaccinationCountRes {
  count: number;
}

export type VaccinationFeeType = 'Paid' | 'Free';

export type VaccinationType = 'COVISHIELD' | 'COVAXIN' | 'SPUTNIK V';

export interface IVaccinationSlotSession {
  allow_all_age: boolean;
  available_capacity: number;
  available_capacity_dose1: number;
  available_capacity_dose2: number;
  date: string;
  min_age_limit: number;
  session_id: string;
  slots: string[];
  vaccine: VaccinationType;
}

export interface IVaccineFees {
  vaccine: VaccinationType;
  fee: string;
}

export interface IVaccinationSlot {
  address: string;
  block_name: string;
  center_id: number;
  district_name: string;
  fee_type: VaccinationFeeType;
  from: string;
  lat: number;
  long: number;
  name: string;
  pincode: number;
  state_name: string;
  sessions: IVaccinationSlotSession[];
  to: string;
  vaccine_fees: IVaccineFees[];
}

export interface IVaccinationSlotRes {
  centers: IVaccinationSlot[];
}
