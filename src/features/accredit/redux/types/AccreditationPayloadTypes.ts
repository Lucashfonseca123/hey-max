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

interface IProgress {
  menuId: number;
  stageId: number;
  finished?: boolean;
}

interface IStatusFinished {
  status1: boolean;
  status2: boolean;
  status3: boolean;
  status4: boolean;
  status5: boolean;
}

export interface ILoginSuccess {
  name: string;
  email: string;
  fullGame: boolean;
  progress: IProgress[];
  statusFinished: IStatusFinished;
}

export interface ILoginErrored {
  message: string;
}

export interface IUpdateInfo {
  fullGame: boolean;
  progress: IProgress[];
  statusFinished: IStatusFinished;
}
export interface IUpdateSuccess {
  fullGame: boolean;
  progress: IProgress[];
  statusFinished: IStatusFinished;
}
export interface IUpdateErrored {
  message: string;
}
