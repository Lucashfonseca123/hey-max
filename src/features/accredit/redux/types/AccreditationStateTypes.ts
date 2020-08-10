interface IProgress {
  menuId: number;
  stageId: number;
  finished?: boolean;
}

export interface ISetUserState {
  name: string;
  loading?: boolean;
  progress: IProgress[];
  campaign: number;
}
