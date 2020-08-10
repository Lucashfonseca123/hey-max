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
