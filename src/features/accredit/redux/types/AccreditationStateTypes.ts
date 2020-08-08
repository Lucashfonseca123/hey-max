interface IProgress {
  menuId: number;
  stageId: number;
  campaign?: number;
}

export interface ISetUserState {
  name: string;
  loading?: boolean;
  progress: IProgress[];
}
