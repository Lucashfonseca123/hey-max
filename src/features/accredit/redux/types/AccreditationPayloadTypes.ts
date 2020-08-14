export interface ISetUser {
  name: string;
}
export interface ISetProgress {
  menuId: number;
  stageId: number;
  finished: boolean;
}

export interface ISetCampaign {
  totalSizeStages: number;
  totalSizeStagesFinished: number;
}

export interface IResetStatus {
  statusFinished: 'status1' | 'status2' | 'status3' | 'status4' | 'status5';
}
