interface IProgress {
  menuId: number;
  stageId: number;
  finished?: boolean;
}

interface IStatus {
  status1: boolean;
  status2: boolean;
  status3: boolean;
  status4: boolean;
}

export interface ISetUserState {
  name: string;
  loading?: boolean;
  progress: IProgress[];
  campaign: number;
  status: IStatus;
}
